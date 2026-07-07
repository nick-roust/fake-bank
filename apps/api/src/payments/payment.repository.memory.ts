import type {
  CreatePaymentRecordInput,
  PaymentRepository,
} from './payment.repository.js';
import type { Payment, PaymentStatus } from './payment.types.js';

export function createMemoryPaymentRepository(): PaymentRepository {
  const payments = new Map<string, Payment>();

  return {
    createPayment(input: CreatePaymentRecordInput): Promise<Payment> {
      const now = new Date().toISOString();
      const payment: Payment = {
        ...input,
        created_at: now,
        updated_at: now,
      };

      payments.set(payment.payment_id, payment);
      return Promise.resolve(payment);
    },

    findPaymentById(paymentId: string): Promise<Payment | null> {
      return Promise.resolve(payments.get(paymentId) ?? null);
    },

    updatePaymentStatus(paymentId: string, status: PaymentStatus): Promise<Payment | null> {
      const payment = payments.get(paymentId);

      if (!payment) {
        return Promise.resolve(null);
      }

      const updated: Payment = {
        ...payment,
        status,
        updated_at: new Date().toISOString(),
      };

      payments.set(paymentId, updated);
      return Promise.resolve(updated);
    },
  };
}
