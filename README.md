# Fake-bank

Open-source payment provider simulator with API, hosted checkout, webhook delivery,
deterministic scenarios, and a reference merchant integration.

## Purpose

Fake-bank provides a local payment provider experience for developers who need to test
payment integrations without using a real acquiring service. It exposes a payment API,
a hosted checkout page, card simulation, webhook delivery, and scenario-based payment
behavior.

## What Is Included

- Payment API defined by OpenAPI
- Hosted card checkout page
- Card test inputs for success and failure paths
- Payment lifecycle tracking
- Webhook delivery and delivery attempt tracking
- Deterministic payment scenarios
- PostgreSQL persistence
- Docker Compose local database
- Example merchant integration

## Quick Start

### Published-image distribution (0.2.0 preparation)

Requires Docker Engine with Compose v2 on Linux amd64, a browser, and an external
HTTP webhook receiver reachable from the API container. Runtime needs no host Node.js
or pnpm. Image publication, exact manifest digests and anonymous pulls are **not yet
verified**; this is not an available-image or release-completion claim.

Follow [the distribution walkthrough](docs/DISTRIBUTION.md) after the separate release
approval and digest-lock step. The image-only candidate is
`docker/docker-compose.release.yml`; the required-digest override is
`docker/docker-compose.release.lock.yml`. Version tags alone are mutable.

### Existing source build

From this checkout, build the existing development runtime:

```sh
docker compose -f docker/docker-compose.yml up --build
```

This requires source and build-time network access, but no host Node.js/pnpm.
It starts PostgreSQL, migrations, API and Checkout; Example Merchant is excluded.
Do not run it alongside a distribution instance using the same ports. This command
builds the development `:local` tags; it is separate from published-image distribution.

### Native workspace development

For native workspace development, install dependencies:

```sh
pnpm install
```

Start PostgreSQL:

```sh
pnpm dev:services
```

Start the API, checkout UI, and example merchant:

```sh
pnpm dev
```

Open the example merchant:

```text
http://127.0.0.1:8090
```

Create a payment, open the hosted checkout URL, and use a test card:

- Success: `4242424242424242`
- Failure: `4000000000000002`

Stop PostgreSQL:

```sh
pnpm dev:services:down
```

## Default Local URLs

- API: `http://localhost:8080`
- Hosted checkout UI: `http://localhost:5173`
- Example merchant: `http://127.0.0.1:8090`

## API Example

For container use, follow the complete [create/read/Checkout/result walkthrough](docs/DISTRIBUTION.md#payment-walkthrough).
It requires an external receiver and explains why a container webhook cannot use the
host browser's loopback address. The [Example Merchant integration](docs/INTEGRATION.md)
is the native-development alternative.

## Scenarios

Fake-bank 0.2.0 preserves these existing scenarios:

- `card_success`
- `card_declined`
- `delayed_success`
- `timeout`
- `duplicate_webhook`
- `provider_error`

See [docs/SCENARIOS.md](docs/SCENARIOS.md).

## Repository Layout

```text
fake-bank/
├── apps/
│   ├── api/
│   └── checkout-ui/
├── db/
│   └── migrations/
├── docker/
│   └── docker-compose.yml
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT.md
│   ├── DOMAIN.md
│   ├── INTEGRATION.md
│   ├── PERSISTENCE.md
│   └── SCENARIOS.md
├── examples/
│   └── merchant/
├── openapi/
│   └── openapi.yaml
├── packages/
│   ├── openapi/
│   └── shared/
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── package.json
└── pnpm-workspace.yaml
```

## Validation

Run the full quality check:

```sh
pnpm validate
```

This validates the OpenAPI contract, database migrations, TypeScript projects, tests,
the example merchant smoke test, and the checkout build.

## Project Rules

Fake-bank is a standalone open-source project. Its code, package names, API contract,
documentation, examples, and Docker configuration describe Fake-bank only as an
independent payment provider simulator.

All project documentation is written in English.

## Non-goals

- Real banking
- Real acquiring
- Real card processing
- PCI compliance
- Authentication and merchant onboarding
- Refunds
- Payouts
- Settlement
- Multi-currency business logic

## License

Apache License 2.0. See [LICENSE](LICENSE).
