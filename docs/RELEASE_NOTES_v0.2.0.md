# Fake-bank 0.2.0 — Single-instance Docker distribution preparation

Status: UNRELEASED / PREPARATION, 2026-11-17. Publication is not authorized by
these notes. Exact release application digests are UNKNOWN.

## Scope

- Image-only Compose candidate for GHCR fake-bank-api and fake-bank-checkout-ui,
  linux/amd64; required-digest override for final distribution.
- Existing PostgreSQL/migration/API/Checkout topology and retained named volume.
- OCI source/version/revision/license metadata and container integration walkthrough.
- Product versions and OpenAPI info.version aligned at 0.2.0; API semantics unchanged.

Development Compose and existing runtime behavior remain unchanged. Example Merchant
is not bundled. No Hosted Demo or multi-instance delivery is included. Old 0.1.0
notes and tag remain historical artifacts; current container packaging postdates them.

## Evidence and pending gates

SLY's 2026-11-17 bounded verification at 8d4e828 used existing local images and
reports all six scenarios, one browser success, migrations, graceful lifecycle and
record persistence across recreation PASS. This does not certify fresh 0.2.0 builds,
registry publication, anonymous pulls, external-host reproduction or ARM64.
See DISTRIBUTION.md for the walkthrough, provenance and separate approval steps.

Unsigned callbacks, no durable retry, non-idempotent creation and process-local
delayed timers remain simulator boundaries. No crash-recovery guarantee is added.
Fresh candidate build, isolated candidate validation, approved publication, manifest
and source correspondence, final digest lock and clean external pull/runtime smoke
are required before distribution acceptance. Version tags alone are not immutable.

## Mandatory generic-only packaging acceptance

No PG27 data or deployment coupling is permitted in application images or release
assets. The build-context exact allowlist and curated runtime asset list are reviewed
at source level only; complete built image/layer/generated-asset and final archive
inspection remains mandatory before separate publication acceptance. See
DISTRIBUTION.md for exclusions. No protected data was deleted or relocated.
