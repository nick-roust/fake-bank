import type { CreatePaymentInput, Payment, PaymentStatus } from './payment.types.js';

export type CreatePaymentRecordInput = CreatePaymentInput & {
  payment_id: string;
  status: PaymentStatus;
  checkout_url: string;
};

export type PaymentRepository = {
  createPayment(input: CreatePaymentRecordInput): Promise<Payment>;
  findPaymentById(paymentId: string): Promise<Payment | null>;
  updatePaymentStatus(paymentId: string, status: PaymentStatus): Promise<Payment | null>;
};
