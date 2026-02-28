---
name: api-data-design
description: Design or review APIs and data models with focus on stable contracts, explicit schemas, safe migrations, clear ownership, and defensive defaults. Use when designing APIs, defining data models, reviewing API contracts, or discussing API or data design.
---

# API & Data Design

Apply this skill when designing or reviewing APIs and data models. Call out tradeoffs and future risks explicitly.

## Principles

### Stable contracts
- Avoid breaking changes to request/response shapes and semantics once published.
- Prefer additive changes (new optional fields, new endpoints) over changing existing fields or removing them.
- Version APIs when breaking changes are unavoidable; document deprecation and sunset.

### Explicit schemas
- Define and document request/response shapes (OpenAPI, JSON Schema, Protobuf, or equivalent).
- Use strong types; avoid untyped blobs or "flexible" payloads where they hide intent.
- Document validation rules, allowed values, and error formats.

### Safe migrations
- Plan schema and API changes so existing clients keep working during rollout.
- Add new fields as optional first; introduce required fields in a backward-compatible way (e.g., default values, feature flags).
- Avoid big-bang rewrites; prefer phased migration paths.

### Clear ownership of data
- Identify which service or system is the source of truth for each entity or aggregate.
- Avoid duplicate sources of truth; document sync or replication if data is copied.
- Define ownership for shared or cross-cutting data (e.g., tenant id, user id).

### Defensive defaults
- **Pagination**: List endpoints should be paginated; never return unbounded lists. Use cursor- or offset-based pagination with a defined max page size.
- **Limits**: Enforce rate limits, payload size limits, and query/compute limits. Document limits in the API contract.
- **Timeouts and failure semantics**: Document timeouts, retry behavior, and idempotency where relevant.

## Review checklist

When reviewing an API or data model:

- [ ] Contract is documented (schema or spec) and consistent with implementation
- [ ] No unbounded list responses; pagination and limits are defined
- [ ] Breaking vs non-breaking changes are clear; migration path exists for breaking changes
- [ ] Source of truth and ownership for each data entity are clear
- [ ] Validation, error formats, and limits are explicit
- [ ] Tradeoffs and future risks are called out (see below)

## Calling out tradeoffs and risks

Always surface:

- **Tradeoffs**: e.g., consistency vs availability, simplicity vs flexibility, latency vs freshness.
- **Future risks**: e.g., scale limits, coupling that may block future changes, assumptions that could invalidate the design later.
- **Alternatives considered**: Brief note on why this approach was chosen over others when it matters.

Format as a short "Tradeoffs & risks" section in design docs or review comments, with bullet points. Be concrete (e.g., "Pagination by offset will degrade under heavy write load; cursor-based is preferable if this list grows large").
