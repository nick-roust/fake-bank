# FakeBank 0.2.0 — Release Candidate

Status: UNRELEASED. Application images, Git tag and GitHub Release are not published.
Registry manifest digests and anonymous external pulls remain unverified.

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

The November 17, 2026 local candidate on base revision
`57cb46f90610cbb47abab04f1258e1f930fca05c` passed a clean minimized API build,
source validation, six scenarios, browser payment, webhook outcomes, fresh/repeated
migrations and graceful lifecycle/persistence checks. The tested source was an
identified working-tree snapshot, not a new commit. Timeout observation was bounded
to five seconds; restart-safe delayed processing was not demonstrated.

The licensing/documentation correction changes packaging and requires renewed
image/archive notice checks. Final acceptance additionally requires exact committed
source correspondence, base-image source/notice obligations, EVA editorial review,
Founder approval, separately authorized publication, verified manifest digests and
anonymous clean-host pull/runtime verification. No immutable public identity exists
merely because package versions say 0.2.0. See [DISTRIBUTION.md](DISTRIBUTION.md).

## Reliability and packaging limits

Callbacks remain unsigned with no durable retry; creation is not idempotent.
Delayed timers are process-local; Checkout does not poll. No crash recovery,
production security, real acquiring or settlement guarantee is added.

Only generic reviewed inputs and curated runtime assets may be packaged. Credentials,
local evidence, observed customer/payment records, databases and consumer deployment
configuration are excluded. Image-layer and archive checks do not replace review
of exact licensing obligations. See [Third-Party Notices](../THIRD_PARTY_NOTICES.md).
