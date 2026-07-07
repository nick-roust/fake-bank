import type { FastifyInstance } from 'fastify';
import type { ApiAppDependencies } from '../server/app.js';
import { sendError } from '../server/errors.js';
import {
  createPaymentBodySchema,
  createPaymentResponseSchema,
  errorResponseSchema,
  paymentParamsSchema,
  paymentResponseSchema,
} from './payment.schemas.js';
import { createPaymentService } from './payment.service.js';
import type { CreatePaymentInput } from './payment.types.js';

type PaymentParams = {
  payment_id: string;
};

export function registerPaymentRoutes(
  app: FastifyInstance,
  dependencies: ApiAppDependencies,
): void {
  const service = createPaymentService(dependencies.payments, dependencies.config);

  app.post<{ Body: CreatePaymentInput }>('/v1/payments', {
    schema: {
      body: createPaymentBodySchema,
      response: {
        201: createPaymentResponseSchema,
        400: errorResponseSchema,
        500: errorResponseSchema,
      },
    },
  }, (request, reply) => {
    service.createPayment(request.body)
      .then((payment) => reply.code(201).send(payment))
      .catch((error: unknown) => {
        request.log.error({ error }, 'Failed to create payment');
        sendError(reply, 500, 'provider_error', 'Provider simulator returned an error.');
      });
  });

  app.get<{ Params: PaymentParams }>('/v1/payments/:payment_id', {
    schema: {
      params: paymentParamsSchema,
      response: {
        200: paymentResponseSchema,
        404: errorResponseSchema,
        500: errorResponseSchema,
      },
    },
  }, (request, reply) => {
    service.getPayment(request.params.payment_id)
      .then((payment) => {
        if (!payment) {
          sendError(reply, 404, 'payment_not_found', 'Payment was not found.');
          return;
        }

        reply.send(payment);
      })
      .catch((error: unknown) => {
        request.log.error({ error }, 'Failed to get payment');
        sendError(reply, 500, 'provider_error', 'Provider simulator returned an error.');
      });
  });
}
