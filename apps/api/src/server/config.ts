export type ApiConfig = {
  host: string;
  port: number;
  publicBaseUrl: string;
  databaseUrl: string;
};

export function loadConfig(env: NodeJS.ProcessEnv = process.env): ApiConfig {
  const host = env.API_HOST ?? 'localhost';
  const port = parsePort(env.API_PORT ?? '8080');
  const publicBaseUrl = env.API_PUBLIC_BASE_URL ?? `http://${host}:${port}`;
  const databaseUrl =
    env.DATABASE_URL ?? 'postgres://fake_bank:fake_bank@localhost:5432/fake_bank';

  return {
    host,
    port,
    publicBaseUrl,
    databaseUrl,
  };
}

function parsePort(value: string): number {
  const port = Number(value);

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`Invalid API_PORT: ${value}`);
  }

  return port;
}
