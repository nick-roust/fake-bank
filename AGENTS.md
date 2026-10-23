## Dependency Ownership Isolation

Human Architect approval: 2026-10-23.

Implementing one subsystem does not authorize changing the behavior, ownership,
business rules, lifecycle, permissions, or contracts of a dependency.

When a dependency lacks a required capability, is incompatible, or has a defect,
record the exact evidence and stop the dependent work. Do not repair or adapt
that dependency under the consuming subsystem's task. Do not introduce a bypass,
fallback, duplicate check, or broader generic behavior solely to make the current
implementation or its tests pass.

A dependency correction requires a separate Human Architect-authorized task
assigned to its owner, with explicit paths, behavior, validation, and execution
authority. Agreed cross-system integration is permitted only within its explicit
approved contract and owner-scoped task; it is not blanket permission to fix
dependent subjects. Required plumbing outside an exact path allowlist still
requires scope authorization before editing.

Passing tests or architecture checks creates no additional authority. Preserve
existing source, data, and unrelated work while reporting a dependency blocker.
