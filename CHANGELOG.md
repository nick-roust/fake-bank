# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses semantic versioning.

## [0.2.0] - 2026-11-18

- Clarify Nick Roust authorship and Apache-2.0 metadata; include third-party notices.
- Correct README/developer documentation and two OpenAPI documentation discrepancies.

### Added

- Single-instance, linux/amd64 image-only Compose for the published API and Checkout
  GHCR images.
- Exact build-context and curated runtime asset allowlists; generic-only packaging acceptance boundary.
- Required-digest override with verified API, Checkout and PostgreSQL manifest
  values in the digest template and documentation.
- Container walkthrough with separate browser-return and container-reachable webhook URLs.
- OCI source, version, revision and license label inputs in existing Dockerfiles.

### Changed

- Product package versions and OpenAPI info.version to 0.2.0; no API semantic changes.
- Documented existing simulator reliability boundaries and retained-volume lifecycle.

### Verified

- G1–G4 accepted: corresponding sources, registry identities/provenance, anonymous
  Docker pulls and an external-host Quick Start without application source or host Node.js/pnpm.
- Two synthetic successful payments with matching webhook HTTP 200; stop/start
  preserves payment data and migration records. G4 did not repeat all six scenarios.

The Docker images are published and verified. FakeBank v0.2.0 was officially
released on November 18, 2026. See the
[GitHub Release v0.2.0](https://github.com/nick-roust/fake-bank/releases/tag/v0.2.0).
No byte-reproducible build, crash recovery, Hosted Demo or multi-instance claim is added.

## [0.1.0] - 2026-07-07

### Added

- Initial project foundation under the Apache License 2.0.
- Contract-first Payment API with OpenAPI.
- Hosted checkout UI for card payment simulation.
- Payment lifecycle implementation with lifecycle event history.
- PostgreSQL persistence schema and migration validation.
- Webhook delivery engine with delivery attempt tracking.
- Deterministic scenario engine for success, decline, delay, timeout, duplicate webhook, and provider error flows.
- Reference merchant integration example.
- Development, architecture, domain, persistence, scenario, and integration documentation.
