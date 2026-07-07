# Fake-bank

Open-source payment provider simulator with API, hosted checkout, and webhook scenarios.

## Purpose

Fake-bank provides a local, deterministic payment provider experience for developers who need to test payment integrations without using a real acquiring service. It exposes a payment API, a hosted checkout page, webhook delivery, and scenario-based payment behavior.

## Scope

- Card payments only
- Contract-first API design with OpenAPI
- Hosted checkout page
- Test card behavior
- Payment lifecycle simulation
- Webhook delivery
- Deterministic payment scenarios
- Docker-based local development
- Example merchant integration

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

## Project Rules

Fake-bank is a standalone open-source project. Its code, package names, API contract, documentation, examples, and Docker configuration must describe Fake-bank only as an independent payment provider simulator.

All project documentation must be written in English.

## Repository Layout

```text
fake-bank/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── docs/
│   ├── ARCHITECTURE.md
│   └── DEVELOPMENT.md
├── openapi/
│   └── openapi.yaml
├── docker/
│   └── docker-compose.yml
├── .gitignore
└── package.json
```

## License

Apache License 2.0. See [LICENSE](LICENSE).
