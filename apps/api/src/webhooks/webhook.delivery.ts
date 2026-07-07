import { randomUUID } from 'node:crypto';
import type { PaymentLifecycleEvent } from '../payments/payment.repository.js';
import type { Payment } from '../payments/payment.types.js';
import type { WebhookDeliveryRepository } from './webhook.repository.js';
import type {
  WebhookDeliveryAttempt,
  WebhookEventName,
  WebhookPayload,
} from './webhook.types.js';

export type WebhookDeliveryService = {
  deliverPaymentLifecycleEvent(
    payment: Payment,
    lifecycleEvent: PaymentLifecycleEvent,
  ): Promise<WebhookDeliveryAttempt | null>;
};

export type WebhookHttpClient = (
  url: string,
  payload: WebhookPayload,
) => Promise<{ status: number; body: string }>;

export function createNoopWebhookDeliveryService(): WebhookDeliveryService {
  return {
    deliverPaymentLifecycleEvent(): Promise<null> {
      return Promise.resolve(null);
    },
  };
}

export function createWebhookDeliveryService(
  repository: WebhookDeliveryRepository,
  httpClient: WebhookHttpClient = postJson,
): WebhookDeliveryService {
  return {
    deliverPaymentLifecycleEvent(
      payment: Payment,
      lifecycleEvent: PaymentLifecycleEvent,
    ): Promise<WebhookDeliveryAttempt | null> {
      const eventName = toWebhookEventName(lifecycleEvent.next_status);

      if (!eventName) {
        return Promise.resolve(null);
      }

      const payload = buildWebhookPayload(payment, lifecycleEvent, eventName);
      const deliveryAttemptId = createDeliveryAttemptId();

      return repository
        .createDeliveryAttempt({
          delivery_attempt_id: deliveryAttemptId,
          payment_id: payment.payment_id,
          event_name: eventName,
          target_url: payment.webhook_url,
          payload,
          attempt_number: 1,
          status: 'pending',
        })
        .then((attempt) => {
          return httpClient(payment.webhook_url, payload)
            .then((response) => {
              if (response.status >= 200 && response.status <= 299) {
                return repository.completeDeliveryAttempt({
                  delivery_attempt_id: attempt.delivery_attempt_id,
                  status: 'delivered',
                  response_status_code: response.status,
                  response_summary: `HTTP ${response.status}`,
                });
              }

              return repository.completeDeliveryAttempt({
                delivery_attempt_id: attempt.delivery_attempt_id,
                status: 'failed',
                response_status_code: response.status,
                response_summary: `HTTP ${response.status}`,
              });
            })
            .catch((error: unknown) => {
              return repository.completeDeliveryAttempt({
                delivery_attempt_id: attempt.delivery_attempt_id,
                status: 'failed',
                response_summary: getErrorMessage(error),
              });
            });
        });
    },
  };
}

export function buildWebhookPayload(
  payment: Payment,
  lifecycleEvent: PaymentLifecycleEvent,
  eventName: WebhookEventName,
): WebhookPayload {
  const payload: WebhookPayload = {
    event: eventName,
    event_id: createEventId(),
    payment_id: payment.payment_id,
    merchant_id: payment.merchant_id,
    amount: payment.amount,
    currency: payment.currency,
    created_at: lifecycleEvent.created_at,
  };

  if (payment.merchant_reference) {
    payload.merchant_reference = payment.merchant_reference;
  }

  return payload;
}

function toWebhookEventName(status: Payment['status']): WebhookEventName | null {
  if (status === 'succeeded') {
    return 'payment.succeeded';
  }

  if (status === 'failed') {
    return 'payment.failed';
  }

  return null;
}

function createEventId(): string {
  return `event_${randomUUID().replaceAll('-', '').slice(0, 12)}`;
}

function createDeliveryAttemptId(): string {
  return `delivery_${randomUUID().replaceAll('-', '').slice(0, 12)}`;
}

function postJson(url: string, payload: WebhookPayload): Promise<{ status: number; body: string }> {
  return fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    return response.text().then((body) => ({
      status: response.status,
      body,
    }));
  });
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Webhook delivery failed.';
}
