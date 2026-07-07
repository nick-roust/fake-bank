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

The development workspace is prepared for implementation phases. Payment behavior is not implemented in this phase.

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
- `CHECKOUT_UI_HOST`
- `CHECKOUT_UI_PORT`

## Commit Rules

Use conventional commits for repository changes.

## Documentation Rules

All documentation in this repository must be written in English.
