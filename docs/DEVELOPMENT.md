# Development

## Requirements

- Node.js 24 or later
- pnpm 11 or later
- Docker with Docker Compose

## Runtime Stack

Backend:

- Node.js 24 or later
- TypeScript
- Fastify

Frontend:

- React
- Vite
- TypeScript

Database:

- PostgreSQL
- Docker Compose for local services

Tooling:

- pnpm workspace
- TypeScript project references
- OpenAPI contract validation
- Redocly for API validation
- Conventional commits

## Local Setup

Install dependencies:

```sh
pnpm install
```

Create a local environment file:

```sh
cp .env.example .env
```

Start local infrastructure services:

```sh
pnpm dev:services
```

Start workspace development commands:

```sh
pnpm dev
```

Stop local infrastructure services:

```sh
pnpm dev:services:down
```

The development workspace is prepared for incremental payment provider simulator implementation.

## Workspace Layout

```text
apps/
  api/
  checkout-ui/

packages/
  shared/
  openapi/
```

`apps/api` contains the backend application workspace.

`apps/checkout-ui` contains the hosted checkout application workspace.

`packages/shared` contains shared TypeScript contracts and utilities for Fake-bank workspaces.

`packages/openapi` contains OpenAPI-related workspace tooling.

## API Service

Start the API service:

```sh
pnpm --filter @fake-bank/api dev
```

The API service listens on `http://localhost:8080` by default.

Create payments through the API and use the returned `checkout_url` to open the hosted checkout page.

## Checkout UI

Start the hosted checkout application:

```sh
pnpm --filter @fake-bank/checkout-ui dev
```

The checkout application listens on `http://localhost:5173` by default.

Hosted checkout URLs use this format:

```text
http://localhost:5173/checkout/{payment_id}
```

The checkout application loads payment state from the API and submits payment confirmation requests to the API. During local development, Vite proxies `/v1` requests to the API service.

Build the checkout application:

```sh
pnpm --filter @fake-bank/checkout-ui build
```

## Database

PostgreSQL runs through Docker Compose for local development.

Start the local database:

```sh
pnpm dev:services
```

Stop the local database:

```sh
pnpm dev:services:down
```

Database migrations live in `db/migrations`.

Apply migrations in order during local development:

```sh
for migration in db/migrations/*.sql; do
  psql "$DATABASE_URL" -f "$migration"
done
```

Automated migration execution will be added in a later implementation phase.

## API Contract

The API contract is defined in `openapi/openapi.yaml`. API implementation changes must be made contract-first.

Do not change implementation behavior before updating the OpenAPI contract when the public API shape or semantics change.

## Workspace Commands

Run all workspace development commands:

```sh
pnpm dev
```

Run all type checks:

```sh
pnpm typecheck
```

Run all tests:

```sh
pnpm test
```

Run all validation commands:

```sh
pnpm validate
```

## Validation

Validate the OpenAPI contract with:

```sh
pnpm lint:openapi
```

Validate database migration structure with:

```sh
pnpm lint:migrations
```

Run tests with:

```sh
pnpm test
```

## Environment Variables

Local environment variables are defined in `.env.example`.

Copy `.env.example` to `.env` before starting local services. The `.env` file is intentionally ignored by Git.

PostgreSQL variables:

- `POSTGRES_HOST`
- `POSTGRES_PORT`
- `POSTGRES_DB`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`

Application variables:

- `API_HOST`
- `API_PORT`
- `API_PUBLIC_BASE_URL`
- `CHECKOUT_UI_HOST`
- `CHECKOUT_UI_PORT`
- `CHECKOUT_PUBLIC_BASE_URL`
- `VITE_API_BASE_URL`

## Commit Rules

Use conventional commits for repository changes.

## Documentation Rules

All documentation in this repository must be written in English.
