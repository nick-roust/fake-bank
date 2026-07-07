import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createApiApp } from '../server/app.js';
import type { ApiConfig } from '../server/config.js';
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
