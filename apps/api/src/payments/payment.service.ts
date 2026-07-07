import { randomUUID } from 'node:crypto';
import type { ApiConfig } from '../server/config.js';
import type { CreatePaymentRecordInput, PaymentRepository } from './payment.repository.js';
import type { CreatePaymentInput, CreatePaymentResponse, Payment } from './payment.types.js';

export type PaymentService = {
  createPayment(input: CreatePaymentInput): Promise<CreatePaymentResponse>;
  getPayment(paymentId: string): Promise<Payment | null>;
};

export function createPaymentService(
  repository: PaymentRepository,
  config: Pick<ApiConfig, 'publicBaseUrl'>,
): PaymentService {
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
  };
}

function createPaymentId(): string {
  return `pay_${randomUUID().replaceAll('-', '').slice(0, 12)}`;
}
