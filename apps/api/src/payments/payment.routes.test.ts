import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createApiApp } from '../server/app.js';
import type { ApiConfig } from '../server/config.js';
import { createPaymentLifecycleService } from './payment.lifecycle.js';
import { createMemoryPaymentRepository } from './payment.repository.memory.js';

const config: ApiConfig = {
  host: 'localhost',
  port: 8080,
  publicBaseUrl: 'http://localhost:8080',
  databaseUrl: 'postgres://fake_bank:fake_bank@localhost:5432/fake_bank',
};

test('health endpoint returns ok', () => {
  const app = createApiApp({ config, payments: createMemoryPaymentRepository() });

  return app.inject({
    method: 'GET',
    url: '/health',
  }).then((response) => {
    assert.equal(response.statusCode, 200);
    assert.deepEqual(response.json(), { status: 'ok' });
    return app.close();
  });
});

test('creates a payment with created status and checkout URL', () => {
  const app = createApiApp({ config, payments: createMemoryPaymentRepository() });

  return app.inject({
    method: 'POST',
    url: '/v1/payments',
    payload: {
      merchant_id: 'demo-shop',
      merchant_reference: 'order_10001',
      amount: 199.99,
      currency: 'EUR',
      payment_method: 'card',
      return_url: 'https://merchant.example/checkout/return',
      webhook_url: 'https://merchant.example/webhooks/payments',
      scenario: 'card_success',
    },
  }).then((response) => {
    assert.equal(response.statusCode, 201);
    const body = response.json();
    assert.match(body.payment_id, /^pay_[A-Za-z0-9]+$/);
    assert.equal(body.status, 'created');
    assert.equal(body.checkout_url, `http://localhost:8080/checkout/${body.payment_id}`);
    return app.close();
  });
});

test('retrieves a created payment', () => {
  const app = createApiApp({ config, payments: createMemoryPaymentRepository() });

  return app.inject({
    method: 'POST',
    url: '/v1/payments',
    payload: {
      merchant_id: 'demo-shop',
      merchant_reference: 'order_10001',
      amount: 199.99,
      currency: 'EUR',
      payment_method: 'card',
      return_url: 'https://merchant.example/checkout/return',
      webhook_url: 'https://merchant.example/webhooks/payments',
    },
  }).then((createdResponse) => {
    const created = createdResponse.json();

    return app.inject({
      method: 'GET',
      url: `/v1/payments/${created.payment_id}`,
    }).then((response) => {
      assert.equal(response.statusCode, 200);
      const payment = response.json();
      assert.equal(payment.payment_id, created.payment_id);
      assert.equal(payment.status, 'created');
      assert.equal(payment.merchant_id, 'demo-shop');
      assert.equal(payment.payment_method, 'card');
      return app.close();
    });
  });
});

test('returns not found for unknown payment', () => {
  const app = createApiApp({ config, payments: createMemoryPaymentRepository() });

  return app.inject({
    method: 'GET',
    url: '/v1/payments/pay_missing',
  }).then((response) => {
    assert.equal(response.statusCode, 404);
    assert.equal(response.json().error_code, 'payment_not_found');
    return app.close();
  });
});

test('rejects invalid create payment payload', () => {
  const app = createApiApp({ config, payments: createMemoryPaymentRepository() });

  return app.inject({
    method: 'POST',
    url: '/v1/payments',
    payload: {
      merchant_id: 'demo-shop',
      amount: -1,
      currency: 'EUR',
      payment_method: 'card',
      return_url: 'not-a-url',
      webhook_url: 'https://merchant.example/webhooks/payments',
    },
  }).then((response) => {
    assert.equal(response.statusCode, 400);
    return app.close();
  });
});

test('confirms a successful payment through created to pending to succeeded', () => {
  const payments = createMemoryPaymentRepository();
  const app = createApiApp({ config, payments });

  return app.inject({
    method: 'POST',
    url: '/v1/payments',
    payload: {
      merchant_id: 'demo-shop',
      amount: 199.99,
      currency: 'EUR',
      payment_method: 'card',
      return_url: 'https://merchant.example/checkout/return',
      webhook_url: 'https://merchant.example/webhooks/payments',
    },
  }).then((createdResponse) => {
    const created = createdResponse.json();

    return app.inject({
      method: 'POST',
      url: `/v1/payments/${created.payment_id}/confirm`,
      payload: {
        payment_method: 'card',
        card: {
          number: '4242424242424242',
          expiry: '12/30',
          cvv: '123',
        },
      },
    }).then((response) => {
      assert.equal(response.statusCode, 200);
      const payment = response.json();
      assert.equal(payment.status, 'succeeded');

      return payments.listLifecycleEvents(created.payment_id).then((events) => {
        assert.deepEqual(events.map((event) => event.next_status), ['pending', 'succeeded']);
        assert.deepEqual(events.map((event) => event.reason), [
          'payment_confirmed',
          'test_card_success',
        ]);
        return app.close();
      });
    });
  });
});

test('confirms a declined payment through created to pending to failed', () => {
  const payments = createMemoryPaymentRepository();
  const app = createApiApp({ config, payments });

  return app.inject({
    method: 'POST',
    url: '/v1/payments',
    payload: {
      merchant_id: 'demo-shop',
      amount: 199.99,
      currency: 'EUR',
      payment_method: 'card',
      return_url: 'https://merchant.example/checkout/return',
      webhook_url: 'https://merchant.example/webhooks/payments',
    },
  }).then((createdResponse) => {
    const created = createdResponse.json();

    return app.inject({
      method: 'POST',
      url: `/v1/payments/${created.payment_id}/confirm`,
      payload: {
        payment_method: 'card',
        card: {
          number: '4000000000000002',
          expiry: '12/30',
          cvv: '123',
        },
      },
    }).then((response) => {
      assert.equal(response.statusCode, 200);
      const payment = response.json();
      assert.equal(payment.status, 'failed');

      return payments.listLifecycleEvents(created.payment_id).then((events) => {
        assert.deepEqual(events.map((event) => event.next_status), ['pending', 'failed']);
        assert.deepEqual(events.map((event) => event.reason), [
          'payment_confirmed',
          'test_card_declined',
        ]);
        return app.close();
      });
    });
  });
});

test('rejects unsupported test card input', () => {
  const app = createApiApp({ config, payments: createMemoryPaymentRepository() });

  return app.inject({
    method: 'POST',
    url: '/v1/payments',
    payload: {
      merchant_id: 'demo-shop',
      amount: 199.99,
      currency: 'EUR',
      payment_method: 'card',
      return_url: 'https://merchant.example/checkout/return',
      webhook_url: 'https://merchant.example/webhooks/payments',
    },
  }).then((createdResponse) => {
    const created = createdResponse.json();

    return app.inject({
      method: 'POST',
      url: `/v1/payments/${created.payment_id}/confirm`,
      payload: {
        payment_method: 'card',
        card: {
          number: '4111111111111111',
          expiry: '12/30',
          cvv: '123',
        },
      },
    }).then((response) => {
      assert.equal(response.statusCode, 400);
      assert.equal(response.json().error_code, 'invalid_request');
      return app.close();
    });
  });
});

test('rejects confirming a terminal payment', () => {
  const app = createApiApp({ config, payments: createMemoryPaymentRepository() });

  return app.inject({
    method: 'POST',
    url: '/v1/payments',
    payload: {
      merchant_id: 'demo-shop',
      amount: 199.99,
      currency: 'EUR',
      payment_method: 'card',
      return_url: 'https://merchant.example/checkout/return',
      webhook_url: 'https://merchant.example/webhooks/payments',
    },
  }).then((createdResponse) => {
    const created = createdResponse.json();
    const confirmPayload = {
      payment_method: 'card',
      card: {
        number: '4242424242424242',
        expiry: '12/30',
        cvv: '123',
      },
    };

    return app.inject({
      method: 'POST',
      url: `/v1/payments/${created.payment_id}/confirm`,
      payload: confirmPayload,
    }).then((firstConfirm) => {
      assert.equal(firstConfirm.statusCode, 200);
      return app.inject({
        method: 'POST',
        url: `/v1/payments/${created.payment_id}/confirm`,
        payload: confirmPayload,
      });
    }).then((secondConfirm) => {
      assert.equal(secondConfirm.statusCode, 409);
      assert.equal(secondConfirm.json().error_code, 'payment_already_finalized');
      return app.close();
    });
  });
});

test('rejects invalid lifecycle transitions', () => {
  const payments = createMemoryPaymentRepository();
  const lifecycle = createPaymentLifecycleService(payments);

  return payments.createPayment({
    payment_id: 'pay_invalidtransition',
    merchant_id: 'demo-shop',
    amount: 199.99,
    currency: 'EUR',
    payment_method: 'card',
    status: 'created',
    checkout_url: 'http://localhost:8080/checkout/pay_invalidtransition',
    return_url: 'https://merchant.example/checkout/return',
    webhook_url: 'https://merchant.example/webhooks/payments',
  }).then((createdPayment) => {
    return assert.rejects(
      () => lifecycle.transitionPayment(createdPayment, 'succeeded', 'invalid_direct_success'),
      /Invalid payment transition/,
    ).then(() => lifecycle.transitionPayment(createdPayment, 'pending', 'valid_pending'));
  }).then((pendingPayment) => {
    return assert.rejects(
      () => lifecycle.transitionPayment(pendingPayment, 'created', 'invalid_reopen'),
      /Invalid payment transition/,
    ).then(() => lifecycle.transitionPayment(pendingPayment, 'succeeded', 'valid_success'));
  }).then((succeededPayment) => {
    return assert.rejects(
      () => lifecycle.transitionPayment(succeededPayment, 'failed', 'invalid_terminal_change'),
      /Invalid payment transition/,
    );
  });
});
