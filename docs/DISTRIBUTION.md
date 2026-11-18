# Single-instance Docker distribution — FakeBank 0.2.0

The API and Checkout images are published on GHCR for `linux/amd64`. Technical
gates G1–G4 passed on November 17, 2026: corresponding-source availability,
registry identity/provenance, anonymous pulls and an external-host Quick Start.

**Product status: Released — November 18, 2026.** See the official
[GitHub Release v0.2.0](https://github.com/nick-roust/fake-bank/releases/tag/v0.2.0).
Hosted Demo and multi-instance support are excluded.

## Install published images

Runtime requires Docker Engine with Compose v2 on Linux amd64, a browser, and an
external HTTP webhook receiver. The payment example also uses curl. No host
Node.js/pnpm, application source checkout or source build is required.

Download the two unchanged Compose definitions from the configuration revision
used in external-host verification. Run from a new directory with free loopback
ports 8080/5173; do not use an existing FakeBank or PG27 project directory:

```sh
mkdir -p docker
curl --fail --location https://raw.githubusercontent.com/nick-roust/fake-bank/47acc43c366d87df956179f7e143285901f0ea41/docker/docker-compose.release.yml --output docker/docker-compose.release.yml
curl --fail --location https://raw.githubusercontent.com/nick-roust/fake-bank/47acc43c366d87df956179f7e143285901f0ea41/docker/docker-compose.release.lock.yml --output docker/docker-compose.release.lock.yml
```

Preparation-era comments in these unchanged Compose definitions are historical;
the publication status and verified digests in this guide describe the completed
G1–G4 checks.

The base file supplies version tags and no build contexts. Always combine it with
the digest-lock override below. It preserves PostgreSQL → one-shot migrations →
API → Checkout ordering. Checkout proxies `/v1` to API on the Compose network.
API and Checkout publish only loopback 8080/5173; PostgreSQL has no host port.
`postgres-data` retains database state. The dedicated default project is
`fake-bank-release`, distinct from development, but fixed ports still prevent
simultaneous default runtimes. This is a single-instance configuration.

## Verified images and digest lock

These registry manifest digests were verified independently of local image IDs.
The PostgreSQL digest is the `linux/amd64` manifest for the existing `17-alpine`
dependency, not a different major version.

| Component | Version reference | Verified registry manifest digest |
|---|---|---|
| API and migrations | `ghcr.io/nick-roust/fake-bank-api:0.2.0` | `sha256:8de4699c905e716cf1f71bf92709522002c2751af4418953f7ff21639c30aebc` |
| Checkout | `ghcr.io/nick-roust/fake-bank-checkout-ui:0.2.0` | `sha256:3739589851cab7078849023be742d1e4ff092d8b24db26648ffb667cd1488568` |
| PostgreSQL | `postgres:17-alpine` | `sha256:005c5c37db96c1e6652a79ea31f9886402fba81ac95dc2db897739121dd7f8f2` |

The application images were built from runtime source
`cfe74cf4aebdc3deef72762216453d79964ed4ee`. The Compose definitions used in G4 are
from `47acc43c366d87df956179f7e143285901f0ea41`. Documentation updates do not change
the image source revision. OCI source/version/revision/license labels and exact
manifest/config correspondence were verified; labels alone are not provenance.

Create `.env.release` in the parent of `docker/` with the verified values:

```sh
cat > .env.release <<'EOF'
FAKE_BANK_API_DIGEST=sha256:8de4699c905e716cf1f71bf92709522002c2751af4418953f7ff21639c30aebc
FAKE_BANK_CHECKOUT_DIGEST=sha256:3739589851cab7078849023be742d1e4ff092d8b24db26648ffb667cd1488568
POSTGRES_DIGEST=sha256:005c5c37db96c1e6652a79ea31f9886402fba81ac95dc2db897739121dd7f8f2
EOF
```

Alternatively, copy the current [digest template](../docker/release.env.example)
to `.env.release`; it contains the same public digest values. Keep local environment
files outside version control. Do not put credentials in shared release material.
The unchanged lock override requires all three variables, pins references as
`tag@digest`, and uses the same API image for migrations and API. A version tag
alone is mutable; do not substitute unverified local image/config IDs or omit the
lock override. No registry login is required for these public images.

Validate configuration without contacting the runtime:

```sh
docker compose --env-file .env.release -f docker/docker-compose.release.yml -f docker/docker-compose.release.lock.yml config --quiet
```

Pull and start the published images:

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

G1–G4 verification completed on November 17, 2026:

- **G1 — Corresponding sources:** the matching base-component source companion is
  public and its downloaded SHA-256 matches the approved archive. See
  [Licensing and corresponding sources](#licensing-and-corresponding-sources).
- **G2 — Registry identities and provenance:** both published application manifests
  and configs match the inspected FB-020 candidates from committed runtime source
  `cfe74cf4aebdc3deef72762216453d79964ed4ee` byte for byte.
- **G3 — Anonymous access:** both application images were pulled by exact digest
  with an empty Docker configuration; all config/layer blobs were also downloaded
  anonymously and hash-verified.
- **G4 — External-host Quick Start:** Linux amd64, Docker Engine and Compose v2,
  without host Node.js/pnpm or an application source checkout. Digest-locked pulls,
  clean/repeated migrations, healthy services, one native browser payment, terminal
  GET, webhook HTTP 200, stop/start with unchanged SQL state, and a second successful
  payment through the Checkout proxy passed. Existing unrelated host workloads
  were preserved. The test configuration added only resource limits.

G4 used two synthetic `card_success` payments; it did not repeat all six scenarios.
Stop/start passed with zero exit codes and no OOM kills. This does not establish
crash recovery, restart-safe delayed processing or universal delivery guarantees.

Historical local candidate evidence is separate: the November 17 working-tree
snapshot on base revision `57cb46f90610cbb47abab04f1258e1f930fca05c` passed six scenario
outcomes, a browser payment, fresh/repeated migrations, stop/start and record
retention after container recreation. Its timeout observation was five seconds.
That local evidence alone did not establish registry or external-host readiness;
G1–G4 subsequently verified the published artifacts within the bounds above.

For source-build development, run
`docker compose -f docker/docker-compose.yml up --build -d --wait` from a checkout.
This builds development `:local` tags rather than installing the published images
and needs no host Node.js/pnpm. Do not run both on the same default ports.

## Historical build and publication record — maintainers

Build and publication were producer operations, not end-user installation steps.
The existing API and Checkout Dockerfiles were built from the clean committed
runtime revision above with `VERSION=0.2.0` and its full `REVISION`. Unique candidate
tags were used; existing development `:local` tags were preserved. Build context,
dependency lock, base identities, image layers/filesystems, generated Checkout
assets and license notices were inspected before controlled publication.

The two approved FB-020 candidates were then tagged `:0.2.0` and pushed without a
rebuild. Registry manifests/configs were compared with the candidates, both packages
were made public, and anonymous access and the external-host runtime were verified.
The current verified identities are the installation table above. These completed
operations do not authorize overwriting published tags or rebuilding the candidate.
No byte-reproducibility claim follows from frozen dependencies or matching labels.

Future artifact changes require a newly approved source/build/publication and
verification scope. Keep exact revision, Dockerfile/lock hashes, base identities,
build logs, image digests and content/license inspection results. Documentation-only
updates do not change the verified runtime. The official FakeBank v0.2.0 product
release was published on November 18, 2026; see the GitHub Release linked above.

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
files by recursive directory archive. The digest template contains only verified
public image identities, not credentials. Preserve those non-secret values in reviewed release
material; do not bundle private environment files.
GitHub's automatic source archives are separate Git snapshots, not curated runtime
bundles; review their exact committed tree before authorizing a source release.

Before any separately authorized build acceptance/publication, inspect the actual
build-context inputs, both images' complete layers and final filesystem, image config/
labels/history and Checkout generated assets for forbidden data, keys, host paths and
PG27 coupling. Deleted-in-later-layer material is still prohibited. Inspect candidate
release archive members and contents against the asset list. Record image manifest
identities and pass/fail without publishing sensitive findings. Recheck the full local
context including ignored/untracked files and symlinks at the actual build revision;
new allowlist entries need explicit review. Source allowlists alone do not
replace artifact-content inspection. The current image-content checks are complete;
any future curated runtime archive must still match the curated asset list when
assembled.

## Licensing and corresponding sources

[Third-Party Notices](../THIRD_PARTY_NOTICES.md) accompanies the root LICENSE in
both application images at `/usr/share/licenses/fake-bank/`. Preserve all inherited
base/dependency notices. The curated runtime asset list includes these notices
and the OpenAPI contract; it is separate from the corresponding-source companion.

G1 verified public access to the matching archive through the
[source-only prerelease](https://github.com/nick-roust/fake-bank/releases/tag/v0.2.0-sources.1):

- [fake-bank-0.2.0-base-sources.tar.gz](https://github.com/nick-roust/fake-bank/releases/download/v0.2.0-sources.1/fake-bank-0.2.0-base-sources.tar.gz)
- Size: 128,616,003 bytes.
- SHA-256: `13b23bca9eb94bfb9f35e19065ea96c90a4de0cbfc0fc77d0981275e6a07baa8`.

The source-only prerelease does not constitute the FakeBank 0.2.0 product release.
See [source availability](../licenses/SOURCE_AVAILABILITY.txt) for the exact scope
and [base notices](../licenses/BASE_LICENSES.txt) for applicable third-party terms.
A passing runtime test alone does not establish license compliance. Changes to
base identities or distributed components require refreshed inventories, notices
and applicable source-delivery verification before redistribution. PostgreSQL is
pulled separately, not embedded in the application images.
