# Architecture

## Purpose

Fake-bank is a payment provider simulator for local development, integration testing, demos, and education. It provides the external behavior developers expect from a payment provider: payment creation, hosted checkout, payment lifecycle transitions, and webhook delivery.

## Target Users

- Developers building payment integrations
- QA engineers testing payment flows
- Tooling authors who need a deterministic provider simulator
- Technical writers and educators demonstrating payment lifecycles

## Supported Use Cases

- Create a card payment through an API
- Redirect a buyer to a hosted checkout page
- Confirm payment with deterministic test cards
- Receive success or failure webhooks
- Exercise delayed, duplicate, timeout, and provider error scenarios

## Component Model

### API Service

The API service exposes the public payment provider contract. It owns payment creation, payment retrieval, payment confirmation, and webhook test endpoints.

### Checkout UI

The checkout UI provides a hosted payment page for buyers. It displays merchant and payment details, accepts test card input, and submits payment confirmation.

### Webhook Engine

The webhook engine sends payment lifecycle events to merchant webhook URLs. It supports deterministic delivery, retry tracking, and duplicate delivery scenarios.

### Scenario Engine

The scenario engine controls payment outcomes and timing. It keeps behavior explicit through named scenarios instead of hidden branching logic.

### Persistence Layer

The persistence layer stores payments, lifecycle events, scenario execution state, and webhook delivery attempts.

## External Provider Model

```text
Merchant
    |
    v
Fake-bank API
    |
    v
Buyer Checkout
    |
    v
Payment Processing
    |
    v
Webhook Delivery
```

## Payment Lifecycle

```text
created -> pending -> succeeded
created -> pending -> failed
```

Additional scenarios may keep a payment pending, delay a terminal state, or repeat webhook delivery.

## Non-goals

Fake-bank does not provide:

- Real banking
- Real acquiring
- Real card processing
- PCI compliance
- Settlement
- Refunds
- Payouts
- Merchant onboarding
- Production payment security controls
