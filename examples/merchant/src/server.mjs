import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';

const defaultConfig = {
  host: process.env.MERCHANT_HOST ?? '127.0.0.1',
  port: Number(process.env.MERCHANT_PORT ?? '8090'),
  fakeBankBaseUrl: process.env.FAKE_BANK_BASE_URL ?? 'http://127.0.0.1:8080',
  publicBaseUrl: process.env.MERCHANT_PUBLIC_BASE_URL ?? 'http://127.0.0.1:8090',
};

export function createMerchantApp(config = defaultConfig) {
  const payments = new Map();

  const server = createServer((request, response) => {
    routeRequest({ request, response, payments, config }).catch((error) => {
      sendHtml(response, 500, page('Error', `<p>${escapeHtml(error.message)}</p>`));
    });
  });

  return {
    server,
    payments,
    listen() {
      return new Promise((resolve) => {
        server.listen(config.port, config.host, () => resolve(server));
      });
    },
    close() {
      return new Promise((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }

          resolve();
        });
      });
    },
  };
}

function routeRequest({ request, response, payments, config }) {
  const url = new URL(request.url ?? '/', config.publicBaseUrl);

  if (request.method === 'GET' && url.pathname === '/') {
    sendHtml(response, 200, renderHome(payments));
    return Promise.resolve();
  }

  if (request.method === 'POST' && url.pathname === '/payments') {
    return readForm(request)
      .then((form) => createPayment(config, form)
        .then((payment) => {
          payments.set(payment.payment_id, {
            payment_id: payment.payment_id,
            status: payment.status,
            checkout_url: payment.checkout_url,
            amount: form.get('amount') || '199.99',
            currency: form.get('currency') || 'EUR',
            scenario: form.get('scenario') || 'card_success',
            webhook_event: null,
          });

          redirect(response, `/payments/${payment.payment_id}`);
        }));
  }

  if (request.method === 'GET' && url.pathname.startsWith('/payments/')) {
    const paymentId = url.pathname.split('/')[2];
    const payment = payments.get(paymentId);

    if (!payment) {
      sendHtml(response, 404, page('Payment not found', '<p>Payment was not found.</p>'));
      return Promise.resolve();
    }

    sendHtml(response, 200, renderPayment(payment));
    return Promise.resolve();
  }

  if (request.method === 'POST' && url.pathname === '/webhooks/fake-bank') {
    return readJson(request).then((payload) => {
      const existing = payments.get(payload.payment_id);

      if (existing) {
        payments.set(payload.payment_id, {
          ...existing,
          status: payload.event === 'payment.succeeded' ? 'succeeded' : 'failed',
          webhook_event: payload.event,
        });
      }

      sendJson(response, 200, { received: true });
    });
  }

  sendHtml(response, 404, page('Not found', '<p>Route was not found.</p>'));
  return Promise.resolve();
}

function createPayment(config, form) {
  const scenario = form.get('scenario') || 'card_success';
  const amount = Number(form.get('amount') || '199.99');
  const currency = form.get('currency') || 'EUR';
  const merchantReference = `demo_order_${randomUUID().replaceAll('-', '').slice(0, 8)}`;

  return fetch(`${config.fakeBankBaseUrl}/v1/payments`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      merchant_id: 'example-merchant',
      merchant_reference: merchantReference,
      amount,
      currency,
      payment_method: 'card',
      return_url: `${config.publicBaseUrl}/`,
      webhook_url: `${config.publicBaseUrl}/webhooks/fake-bank`,
      scenario,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Payment creation failed with HTTP ${response.status}`);
    }

    return response.json();
  });
}

function renderHome(payments) {
  const rows = [...payments.values()]
    .map((payment) => {
      return `<tr>
        <td><a href="/payments/${escapeHtml(payment.payment_id)}">${escapeHtml(payment.payment_id)}</a></td>
        <td>${escapeHtml(payment.status)}</td>
        <td>${escapeHtml(payment.scenario)}</td>
      </tr>`;
    })
    .join('');

  return page('Example Merchant', `
    <form method="post" action="/payments">
      <label>
        Amount
        <input name="amount" value="199.99" inputmode="decimal">
      </label>
      <label>
        Currency
        <input name="currency" value="EUR" maxlength="3">
      </label>
      <label>
        Scenario
        <select name="scenario">
          <option value="card_success">Successful payment</option>
          <option value="card_declined">Failed payment</option>
        </select>
      </label>
      <button type="submit">Create payment</button>
    </form>
    <table>
      <thead>
        <tr><th>Payment</th><th>Status</th><th>Scenario</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `);
}

function renderPayment(payment) {
  return page('Payment Result', `
    <dl>
      <dt>Payment ID</dt>
      <dd>${escapeHtml(payment.payment_id)}</dd>
      <dt>Status</dt>
      <dd>${escapeHtml(payment.status)}</dd>
      <dt>Scenario</dt>
      <dd>${escapeHtml(payment.scenario)}</dd>
      <dt>Webhook Event</dt>
      <dd>${escapeHtml(payment.webhook_event ?? 'not received')}</dd>
    </dl>
    <p><a href="${escapeHtml(payment.checkout_url)}">Open hosted checkout</a></p>
    <p><a href="/">Create another payment</a></p>
  `);
}

function page(title, content) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <style>
      body { font-family: system-ui, sans-serif; margin: 2rem; max-width: 760px; }
      form, dl { display: grid; gap: 0.75rem; max-width: 420px; }
      label { display: grid; gap: 0.25rem; font-weight: 600; }
      input, select, button { font: inherit; padding: 0.55rem; }
      button { cursor: pointer; }
      table { border-collapse: collapse; width: 100%; margin-top: 2rem; }
      th, td { border-bottom: 1px solid #ddd; padding: 0.65rem; text-align: left; }
      dt { font-weight: 700; }
      dd { margin: 0; }
    </style>
  </head>
  <body>
    <main>
      <h1>${escapeHtml(title)}</h1>
      ${content}
    </main>
  </body>
</html>`;
}

function readForm(request) {
  return readText(request).then((body) => new URLSearchParams(body));
}

function readJson(request) {
  return readText(request).then((body) => JSON.parse(body));
}

function readText(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    request.on('data', (chunk) => chunks.push(chunk));
    request.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    request.on('error', reject);
  });
}

function redirect(response, location) {
  response.writeHead(303, { location });
  response.end();
}

function sendHtml(response, statusCode, body) {
  response.writeHead(statusCode, { 'content-type': 'text/html; charset=utf-8' });
  response.end(body);
}

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(body));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const app = createMerchantApp();

  app.listen().then(() => {
    console.log(`Example merchant listening on http://${defaultConfig.host}:${defaultConfig.port}`);
  });

  const close = () => {
    app.close().then(() => process.exit(0));
  };

  process.on('SIGINT', close);
  process.on('SIGTERM', close);
}
