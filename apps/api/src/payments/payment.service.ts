import { randomUUID } from 'node:crypto';
import type { ApiConfig } from '../server/config.js';
import { InvalidTestCardError, resolveTestCard } from './card-simulation.js';
import {
  createPaymentLifecycleService,
  InvalidPaymentTransitionError,
} from './payment.lifecycle.js';
import type { CreatePaymentRecordInput, PaymentRepository } from './payment.repository.js';
import type {
  ConfirmPaymentInput,
  CreatePaymentInput,
  CreatePaymentResponse,
  Payment,
} from './payment.types.js';

export class PaymentNotFoundError extends Error {
  constructor(readonly paymentId: string) {
    super(`Payment was not found: ${paymentId}`);
  }
}

export { InvalidPaymentTransitionError, InvalidTestCardError };

export type PaymentService = {
  createPayment(input: CreatePaymentInput): Promise<CreatePaymentResponse>;
  getPayment(paymentId: string): Promise<Payment | null>;
  confirmPayment(paymentId: string, input: ConfirmPaymentInput): Promise<Payment>;
};

export function createPaymentService(
  repository: PaymentRepository,
  config: Pick<ApiConfig, 'publicBaseUrl'>,
): PaymentService {
  const lifecycle = createPaymentLifecycleService(repository);

  return {
    createPayment(input: CreatePaymentInput): Promise<CreatePaymentResponse> {
      const paymentId = createPaymentId();
      const checkoutUrl = `${config.publicBaseUrl}/checkout/${paymentId}`;
      const record: CreatePaymentRecordInput = {
        ...input,
        payment_id: paymentId,
        status: 'created',
        checkout_url: checkoutUrl,
      };

      return repository.createPayment(record).then((payment) => ({
        payment_id: payment.payment_id,
        status: payment.status,
        checkout_url: payment.checkout_url,
      }));
    },

    getPayment(paymentId: string): Promise<Payment | null> {
      return repository.findPaymentById(paymentId);
    },

    confirmPayment(paymentId: string, input: ConfirmPaymentInput): Promise<Payment> {
      return repository.findPaymentById(paymentId)
        .then((payment) => {
          if (!payment) {
            throw new PaymentNotFoundError(paymentId);
          }

          const result = resolveTestCard(input.card);

          return ensurePending(payment).then((pendingPayment) => {
            const terminalStatus = result === 'success' ? 'succeeded' : 'failed';
            const reason = result === 'success' ? 'test_card_success' : 'test_card_declined';
            return lifecycle.transitionPayment(pendingPayment, terminalStatus, reason);
          });
        });
    },
  };

  function ensurePending(payment: Payment): Promise<Payment> {
    if (payment.status === 'pending') {
      return Promise.resolve(payment);
    }

    return lifecycle.transitionPayment(payment, 'pending', 'payment_confirmed');
  }
}

function createPaymentId(): string {
  return `pay_${randomUUID().replaceAll('-', '').slice(0, 12)}`;
}
