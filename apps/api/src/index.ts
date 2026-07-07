import { createPostgresPaymentRepository } from './payments/payment.repository.postgres.js';
import { createApiApp } from './server/app.js';
import { loadConfig } from './server/config.js';
import { createPgPool } from './server/db.js';

const config = loadConfig();
const pool = createPgPool(config.databaseUrl);
const payments = createPostgresPaymentRepository(pool);
const app = createApiApp({ config, payments });

app.listen({ host: config.host, port: config.port })
  .then((address) => {
    app.log.info({ address }, 'API service started');
  })
  .catch((error: unknown) => {
    app.log.error({ error }, 'API service failed to start');
    process.exit(1);
  });

const close = () => {
  app.close()
    .then(() => pool.end())
    .then(() => {
      process.exit(0);
    })
    .catch((error: unknown) => {
      app.log.error({ error }, 'API service failed to stop cleanly');
      process.exit(1);
    });
};

process.on('SIGINT', close);
process.on('SIGTERM', close);
