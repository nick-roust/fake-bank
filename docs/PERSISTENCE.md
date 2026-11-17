# Persistence

## Purpose

This document describes the PostgreSQL persistence layer used by the FakeBank
0.2.0 release candidate. The foundation was introduced in v0.1 and is retained in
the current implementation. The sections below describe the current tables, schema
ownership, relationships, indexes, timestamps, and migration workflow.

The persistence layer supports the payment API, hosted checkout confirmation flow,
scenario execution state, lifecycle event history, and webhook delivery tracking.

## Schema Ownership

The persistence schema stores simulator-owned provider state only.

It stores:

- payments
- payment lifecycle events
- scenario execution state
- webhook delivery attempts

It does not store real card data, merchant business state, buyer identity, product data, shipping state, or real financial operations.

## Migration Structure

Database migrations live in:

```text
db/migrations/
```

The first migration is:

```text
db/migrations/0001_payment_persistence.sql
```

Migration files are ordered with a four-digit numeric prefix and a short snake-case description:

```text
0001_payment_persistence.sql
0002_next_change.sql
```

Migrations are append-only after they are shared. Later schema changes must be added as new migrations.

## Database Schema

### payments

Stores the current provider-side payment state.

Primary key:

- `payment_id`

Required fields:

- `merchant_id`
- `amount`
- `currency`
- `payment_method`
- `status`
- `checkout_url`
- `return_url`
- `webhook_url`
- `metadata`
- `created_at`
- `updated_at`

Optional fields:

- `merchant_reference`
- `scenario`

Indexes:

- `payments_status_idx`
- `payments_merchant_id_idx`
- `payments_scenario_idx`

### payment_lifecycle_events

Stores immutable payment lifecycle records.

Primary key:

- `lifecycle_event_id`

Foreign key:

- `payment_id` references `payments(payment_id)`

Indexes:

- `payment_lifecycle_events_payment_id_created_at_idx`

### scenario_execution_state

Stores scenario progress for a payment.

Primary key:

- `scenario_state_id`

Foreign key:

- `payment_id` references `payments(payment_id)`

Relationship:

- one payment can have at most one active scenario execution state row

Indexes:

- `scenario_execution_state_scheduled_at_idx`

### webhook_delivery_attempts

Stores webhook delivery tracking records.

Primary key:

- `delivery_attempt_id`

Foreign key:

- `payment_id` references `payments(payment_id)`

Indexes:

- `webhook_delivery_attempts_payment_id_created_at_idx`
- `webhook_delivery_attempts_status_created_at_idx`

Delivery status values:

- `pending`
- `delivered`
- `failed`

## Relationships

```text
payments
    |
    +--> payment_lifecycle_events
    |
    +--> scenario_execution_state
    |
    +--> webhook_delivery_attempts
```

Relationship rules:

- `payments` is the root persistence entity.
- `payment_lifecycle_events` records belong to one payment.
- `scenario_execution_state` belongs to one payment and is unique per payment.
- `webhook_delivery_attempts` records belong to one payment.
- Dependent rows are removed when their payment is removed.

## Timestamp Strategy

All tables use `timestamptz` for timestamps.

`created_at` records when the row was created.

`updated_at` records the last state update for mutable rows.

Lifecycle events are immutable and use `created_at` only.

## Local Database Setup

Start PostgreSQL with:

```sh
pnpm dev:services
```

Apply database migrations:

```sh
pnpm db:migrate
```

The migration command tracks applied migration files in `schema_migrations`.

## Migration Validation

Validate migration structure with:

```sh
pnpm lint:migrations
```

This validation checks migration naming, ordering, transaction boundaries, and required schema objects.

## Current schema and recovery limits

`0002_webhook_delivery_status_delivered.sql` renames the original webhook status
`sent` to `delivered`. Both migrations are tracked in `schema_migrations`.
Successful startup on a fresh database and repeated migration skips were tested
locally with the 0.2.0 candidate. A retained named volume preserves payment records
across graceful container recreation; this is not backup or crash-recovery proof.
Persisted scenario rows do not restore process-local delayed timers after restart.
For image-only startup and lifecycle commands, see [DISTRIBUTION.md](DISTRIBUTION.md).
