# Persistence

## Purpose

This document defines the Fake-bank v0.1 persistence foundation. It maps the approved domain model to PostgreSQL tables and describes schema ownership, relationships, indexes, timestamps, and migration workflow.

This phase creates persistence structure only. It does not implement API endpoints, checkout behavior, webhook delivery logic, scenario execution logic, repositories, or application queries.

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

The initial migration is:

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

Stores future scenario progress for a payment.

Primary key:

- `scenario_state_id`

Foreign key:

- `payment_id` references `payments(payment_id)`

Relationship:

- one payment can have at most one active scenario execution state row

Indexes:

- `scenario_execution_state_scheduled_at_idx`

### webhook_delivery_attempts

Stores future webhook delivery tracking records.

Primary key:

- `delivery_attempt_id`

Foreign key:

- `payment_id` references `payments(payment_id)`

Indexes:

- `webhook_delivery_attempts_payment_id_created_at_idx`
- `webhook_delivery_attempts_status_created_at_idx`

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

Apply the initial schema manually during this foundation phase:

```sh
psql "$DATABASE_URL" -f db/migrations/0001_payment_persistence.sql
```

Automated migration execution will be introduced in a later implementation phase.

## Migration Validation

Validate migration structure with:

```sh
pnpm lint:migrations
```

This validation checks migration naming, ordering, transaction boundaries, and required schema objects.
