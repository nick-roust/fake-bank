# Single-instance Docker distribution — 0.2.0 preparation

Status: candidate configuration only. Approved target packages are
`ghcr.io/nick-roust/fake-bank-api` and `ghcr.io/nick-roust/fake-bank-checkout-ui`,
platform `linux/amd64`. Exact application manifest digests are UNKNOWN until a
separately approved build/publication and registry verification. No published-image
availability, anonymous pull, clean-host success or byte-reproducibility is claimed.
Hosted Demo and multi-instance support are excluded.

## Requirements and files

Runtime requires Docker Engine with Compose v2 on Linux amd64, a browser, and an
existing external HTTP webhook receiver. The payment example also uses curl. No host
Node.js/pnpm or source build is required for the published-image runtime. Obtain
`docker-compose.release.yml`, `docker-compose.release.lock.yml` and
`release.env.example` from the same approved source revision, keeping them together
in a `docker` directory. Run the commands below from its parent directory.

The base file is a **candidate tag template**, with no build contexts. It preserves
PostgreSQL → one-shot migrations → API → Checkout ordering. Checkout proxies `/v1`
to API on the default Compose network. API and Checkout publish only loopback
8080/5173; PostgreSQL has no host port. `postgres-data` retains database state.
This is one local instance; use free ports and do not operate on existing FakeBank
or PG27 projects. The dedicated default project is `fake-bank-release`, distinct
from development, but port conflicts still prevent simultaneous default runtimes.

## Digest lock before final distribution

After separate publication approval, inspect the actual registry manifests for both
approved packages and PostgreSQL, confirming linux/amd64. Record registry manifest
digests, source revision, labels, build logs and registry verification results.
Do not use Docker local image/config IDs as manifest digests. A version tag is not
an immutable identity. Labels alone are assertions, not cryptographic provenance.

Copy `docker/release.env.example` to a private, ignored `.env.release`. Set all three
values to verified `sha256:` registry manifest digests; do not commit credentials.
Do not fill them with guesses or the old local verification image IDs. The lock
file requires them and uses the identical API reference for migrations and API.
The PostgreSQL digest must identify the existing 17-alpine dependency, not a new
major version. Final distribution acceptance and GitHub Release are blocked until these values,
their source correspondence and anonymous pulls are independently verified. Remote
digests are obtained during the separately Founder-authorized registry publication
stage; that prior authorization is required before any push, not conditional on
already having the new remote digests. Preserve the final files and populated digest lock as
release evidence after approval; no populated lock exists in this preparation.

Validate without contacting the runtime:

```sh
docker compose --env-file .env.release -f docker/docker-compose.release.yml -f docker/docker-compose.release.lock.yml config --quiet
```

Only **after separate approval** and registry verification, the following are the
end-user lifecycle commands (not executed during release preparation):

```sh
docker compose --env-file .env.release -f docker/docker-compose.release.yml -f docker/docker-compose.release.lock.yml pull
docker compose --env-file .env.release -f docker/docker-compose.release.yml -f docker/docker-compose.release.lock.yml up -d --no-build
docker compose --env-file .env.release -f docker/docker-compose.release.yml -f docker/docker-compose.release.lock.yml ps -a
docker compose --env-file .env.release -f docker/docker-compose.release.yml -f docker/docker-compose.release.lock.yml logs migrate api checkout-ui
curl --fail http://127.0.0.1:8080/health
curl --fail http://127.0.0.1:5173/health
```

Wait for migration exit 0 and healthy API/Checkout. Migrations run automatically;
recorded migrations are skipped on subsequent startup. Static health responses do
not certify database/payment readiness: the create/read/Checkout flow below does.
If migrations fail, inspect logs and stop; do not delete the database to hide failure.
Checkout root is not a payment: open the exact issued `/checkout/pay_...` URL.

## Payment walkthrough

Prepare an **existing external receiver**, outside this product Compose, which accepts
JSON POST, records payloads and returns 2xx. Its URL must resolve and be reachable
from the API container; configure your network/firewall accordingly. A remote HTTPS
receiver works only when container egress/DNS can reach it. Do not send secrets or
real card data. No additional receiver service is packaged here.

The `return_url` is opened by the buyer browser; `webhook_url` is called by the API
container. They need not share a host. Container `127.0.0.1` means that container,
not your host. A host receiver requires a host address reachable from Docker and
an appropriate bind/firewall configuration; host.docker.internal is not assumed
available on Linux. Native Example Merchant instructions are in INTEGRATION.md;
its single public base URL must be reachable by both browser and API when using
its form, and manually created payments are not registered in its in-memory UI.

Set browser return and receiver URLs to your real endpoints (the placeholders below
are intentionally not usable defaults):

```sh
curl --fail-with-body -X POST http://127.0.0.1:8080/v1/payments \
  -H 'content-type: application/json' \
  -d '{
    "merchant_id": "distribution-smoke",
    "merchant_reference": "order_001",
    "amount": 19.99,
    "currency": "EUR",
    "payment_method": "card",
    "return_url": "https://YOUR-BROWSER-RETURN-HOST/result",
    "webhook_url": "https://YOUR-CONTAINER-REACHABLE-RECEIVER/events",
    "scenario": "card_success"
  }'
```

Expect 201 with `payment_id`, `created` status and `checkout_url`. Copy the actual
ID into the following read request; do not reuse the placeholder:

```sh
curl --fail-with-body http://127.0.0.1:8080/v1/payments/PAYMENT_ID_FROM_RESPONSE
```

Expect 200/created. Open the exact issued `checkout_url` in the browser, enter
`4242424242424242`, expiry `12/30` and CVV `123`, and submit. Expect Succeeded.
Read the same payment again: expect `succeeded`. Inspect the external receiver for
`payment.succeeded`, matching payment ID, amount and currency. Follow the Checkout
return link to your browser return endpoint. A failed receiver does not change a
successful payment back to failed. Decline uses `card_declined` with test number
`4000000000000002`. No real banking/acquiring is performed.

## Stop, restart and cleanup

Graceful stop and subsequent start retain the named volume. Run `up` again (rather
than blindly starting the one-shot migration service) to honor dependencies:

```sh
docker compose --env-file .env.release -f docker/docker-compose.release.yml -f docker/docker-compose.release.lock.yml stop
docker compose --env-file .env.release -f docker/docker-compose.release.yml -f docker/docker-compose.release.lock.yml up -d --no-build
```

Remove this project's containers/network while retaining payment data:

```sh
docker compose --env-file .env.release -f docker/docker-compose.release.yml -f docker/docker-compose.release.lock.yml down
```

**Destructive, optional cleanup:** only when intentionally discarding this release
project's database, and after confirming its identity, `down --volumes` deletes
its named volume and all saved payments. Do not use it on existing development,
verification or PG27 projects. No prune commands are required.

## Simulator boundaries and evidence

Callbacks are unsigned, have no durable retry worker and are awaited on the terminal
confirmation path. Duplicate scenario sends three copies; create has no Idempotency-Key
replay contract. Delayed scenarios use process-local timers; persisted rows do not
establish restart/crash recovery. Checkout does not automatically poll delayed outcomes;
reload or GET to observe them. No hosted uptime, production security, multi-instance,
backup, crash recovery or universal idempotency guarantee is made.

The 2026-11-17 SLY verification of source 8d4e828 reused existing local images:
all six scenario outcomes, one real browser success, fresh/repeated migrations,
stop/start and database record persistence across recreation passed. Five scenario
confirmations used HTTP; timeout was observed for only five seconds. This is historical
bounded evidence, not a test of newly built 0.2.0 artifacts or public distribution.
Fresh build, anonymous pull and clean external-host walkthrough remain pending.

## Separately approved build/publication procedure

No publishing workflow or credentials infrastructure is added. After SLY technical
acceptance, request Founder authority for each build/publication/verification stage.
Choose the exact approved committed source revision; require a clean checkout and
record it as SOURCE_REVISION. Build candidates with unique tags, never the existing
`:local` tags; do not touch existing containers or volumes. Illustrative commands
for an authorized operator, not commands executed in this preparation:

```sh
SOURCE_REVISION=APPROVED_FULL_COMMIT_SHA
API_CANDIDATE="ghcr.io/nick-roust/fake-bank-api:0.2.0-candidate-$SOURCE_REVISION"
CHECKOUT_CANDIDATE="ghcr.io/nick-roust/fake-bank-checkout-ui:0.2.0-candidate-$SOURCE_REVISION"
docker build --platform linux/amd64 --build-arg VERSION=0.2.0 --build-arg REVISION="$SOURCE_REVISION" -f docker/Dockerfile.api -t "$API_CANDIDATE" .
docker build --platform linux/amd64 --build-arg VERSION=0.2.0 --build-arg REVISION="$SOURCE_REVISION" -f docker/Dockerfile.checkout-ui -t "$CHECKOUT_CANDIDATE" .
```

Retain source SHA, dependency lock hash, Dockerfile hashes, base-image identities,
platform, tool versions and complete build outputs. Inspect candidate labels/config;
test exact candidate images in a separately authorized isolated project first. No
byte-reproducibility is implied by frozen dependencies or OCI labels.

Only after explicit registry publication authority and approved authentication:

```sh
docker tag "$API_CANDIDATE" ghcr.io/nick-roust/fake-bank-api:0.2.0
docker tag "$CHECKOUT_CANDIDATE" ghcr.io/nick-roust/fake-bank-checkout-ui:0.2.0
docker push ghcr.io/nick-roust/fake-bank-api:0.2.0
docker push ghcr.io/nick-roust/fake-bank-checkout-ui:0.2.0
```

Record push results and remote manifest digests; inspect manifests/platforms and
revision/version/license/source labels against the approved source. Obtain separate
authority for any package visibility changes; do not infer public pullability from
push success. Verify anonymous access and pull on a clean external amd64 host,
fill the digest lock with observed values, render it and run the full walkthrough
against those exact references. Preserve registry/HTTP/browser/lifecycle evidence.
Git tag/GitHub Release/public documentation publication each remain separately
approved actions; do not advertise completed distribution before evidence closes.

## Generic-only packaging acceptance boundary

Application images and curated runtime release assets must contain generic FakeBank
only. Never package PG27 databases, volumes, dumps, backups, observed payment/customer/
banking records or fixtures, credentials, tokens, private keys, populated `.env` files,
Deployment overrides/receipts/provenance, Node/Platform artifacts, logs, audit evidence,
screenshots, browser profiles, protected local state, host paths or PG27 business/runtime
configuration. Generic synthetic examples are permitted; observed PG27 test records are
not. Do not delete or move local data to satisfy this boundary.

Build only from this repository root with the reviewed `.dockerignore`, which denies
all inputs except exact approved application/configuration/migration/dependency files.
Never use workspace, home or PG27 directories as context, COPY sources or release mounts.
No Dockerfile-specific ignore override is approved. Source/COPY review is not an image
content guarantee: dependencies and build-generated contents also require inspection.

`docker/release-assets.txt` is the explicit curated runtime asset list. Archive only
those literal relative paths, from the approved clean source revision; do not package
the workspace, ignored/untracked files, verification evidence or populated digest/env
files by recursive directory archive. The empty digest template is permitted and has
no credentials. After manifest verification, record approved non-secret digest values
in the final reviewed release material; do not bundle private environment files.
GitHub's automatic source archives are separate Git snapshots, not curated runtime
bundles; review their exact committed tree before authorizing a source release.

Before any separately authorized build acceptance/publication, inspect the actual
build-context inputs, both images' complete layers and final filesystem, image config/
labels/history and Checkout generated assets for forbidden data, keys, host paths and
PG27 coupling. Deleted-in-later-layer material is still prohibited. Inspect candidate
release archive members and contents against the asset list. Record image manifest
identities and pass/fail without publishing sensitive findings. Recheck the full local
context including ignored/untracked files and symlinks at the actual build revision;
new allowlist entries need explicit review. This source-level preparation does not
claim image/layer, dependency, browser-bundle or final-archive content verification.
