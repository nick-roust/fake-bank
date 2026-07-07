# Development

## Requirements

- Node.js 24 or later
- pnpm 11 or later
- Docker with Docker Compose

## Local Setup

Install dependencies:

```sh
pnpm install
```

Start local services:

```sh
pnpm dev
```

The implementation workspace will be added in the development environment phase.

## API Contract

The API contract is defined in `openapi/openapi.yaml`. API implementation changes must be made contract-first.

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

Environment variables will be documented as services are added.

## Documentation Rules

All documentation in this repository must be written in English.
