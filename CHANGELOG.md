# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses semantic versioning.

## [0.2.0] - Unreleased

- Clarify Nick Roust authorship and Apache-2.0 metadata; include third-party notices.
- Correct README/developer documentation and two OpenAPI documentation discrepancies.

### Added

- Single-instance, linux/amd64 image-only Compose candidate for approved GHCR packages.
- Exact build-context and curated runtime asset allowlists; generic-only packaging acceptance boundary.
- Required-digest override and publication/provenance checklist; manifest values remain unknown.
- Container walkthrough with separate browser-return and container-reachable webhook URLs.
- OCI source, version, revision and license label inputs in existing Dockerfiles.

### Changed

- Product package versions and OpenAPI info.version to 0.2.0; no API semantic changes.
- Documented existing simulator reliability boundaries and retained-volume lifecycle.

This is release preparation, not evidence of published images, a completed release,
clean-machine verification, byte-reproducible builds, Hosted Demo or multi-instance support.

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
