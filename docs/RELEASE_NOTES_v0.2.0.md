# FakeBank 0.2.0 — Release Candidate

Status: RELEASE CANDIDATE / UNRELEASED. The API and Checkout images are public on
GHCR and technical gates G1–G4 have passed. The official product `v0.2.0` Git tag
and GitHub Release remain pending Founder authorization. Docker publication and
the source-only prerelease do not constitute the official product release.

## Candidate changes

- Single-instance image-only Compose for API, migrations, Checkout and PostgreSQL,
  linux/amd64, with a required-digest override and retained named volume.
- Approved Terminal Mark and Checkout editorial corrections for Created/Succeeded.
- API production dependency installation: tsx remains required at runtime;
  unused compiler/CLI/type packages and install caches are excluded.
- Author/copyright attribution to Nick Roust; Apache-2.0 metadata and third-party
  license notices included in both application images and curated runtime assets.
- README entry point and existing developer documentation corrected; OpenAPI adds
  the existing GET validation error and permits caller-provided request IDs.

Payment engine, API behavior, Checkout design and schema migrations are unchanged.
Example Merchant remains a separate native reference. Hosted Demo, multi-instance
and new banking features are excluded. Historical 0.1.0 notes and tag are preserved.

## Verification and release gates

G1–G4 completed on November 17, 2026 and were accepted by SLY:

| Gate | Result | Verified scope |
|---|---|---|
| G1 — Corresponding sources | PASS | Public source companion, anonymous download and matching SHA-256. |
| G2 — Registry identities / provenance | PASS | Exact published manifests/configs match the inspected FB-020 candidates. |
| G3 — Anonymous Docker pull | PASS | Both images pulled by digest without credentials; config/layer hashes verified. |
| G4 — External-host Quick Start | PASS | Clean migrations, healthy API/Checkout, browser payment, webhook, stop/start and a second successful payment. |

The published `linux/amd64` images were built from runtime source
`cfe74cf4aebdc3deef72762216453d79964ed4ee`. The unchanged Compose definitions tested
in G4 are from `47acc43c366d87df956179f7e143285901f0ea41`. See the
[verified image references and digest lock](DISTRIBUTION.md#verified-images-and-digest-lock)
for all three pinned manifests, including PostgreSQL 17-alpine.

G4 ran without host Node.js/pnpm or an application source checkout. One synthetic
`card_success` payment used the native browser form; a second used the Checkout
proxy after restart. Both reached `succeeded` with matching webhook HTTP 200.
Stop/start preserved the full SQL snapshot, and repeated migrations skipped existing
records. Existing unrelated host services were preserved. Forced recreation and
crash recovery were not tested in G4; the other five scenarios were not rerun there.

Historical local candidate tests on an identified working-tree snapshot based on
`57cb46f90610cbb47abab04f1258e1f930fca05c` covered all six scenario outcomes, a browser
payment and lifecycle/persistence checks. The timeout observation was five seconds;
restart-safe delayed processing was not demonstrated. These are separate from the
later committed-build, registry and external-host verification results.

MARTA visual review passed and EVA editorial review was accepted. Final merge,
Git tag `v0.2.0` and the official GitHub Release still require Founder authorization.
No product release date is assigned. See [distribution instructions](DISTRIBUTION.md)
and the [source-only prerelease](https://github.com/nick-roust/fake-bank/releases/tag/v0.2.0-sources.1).

## Reliability and packaging limits

Callbacks remain unsigned with no durable retry; creation is not idempotent.
Delayed timers are process-local; Checkout does not poll. No crash recovery,
production security, real acquiring or settlement guarantee is added.

Only generic reviewed inputs and curated runtime assets may be packaged. Credentials,
local evidence, observed customer/payment records, databases and consumer deployment
configuration are excluded. Image-layer and archive checks do not replace review
of exact licensing obligations. See [Third-Party Notices](../THIRD_PARTY_NOTICES.md).
