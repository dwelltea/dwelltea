---
name: unit-test
description: Design and review unit tests for pure functions, utilities, and domain logic only. Use when writing or reviewing unit tests, when the user asks for unit test design or coverage, or when distinguishing unit tests from integration or e2e tests.
---

# Unit Testing (Pure & Isolated)

Design and review **unit tests only**. No databases, network, filesystem, or framework internals.

## Scope

- **In scope**: Pure functions, utilities, domain logic
- **Out of scope**: Databases, network, filesystem, framework internals (Next.js, React, MongoDB drivers), integration tests, end-to-end tests

## Principles

- One test → one behavior
- Deterministic and fast
- Explicit inputs and outputs
- Avoid mocking unless needed to isolate the unit; mock only **external** dependencies, not internal logic

## What to Unit Test

- Business rules and calculations
- Data transformation and mapping
- Validation (schemas, guards)
- Error handling paths
- Edge cases and boundary conditions

## What NOT to Unit Test

- Framework behavior
- Database queries
- Third-party library internals
- UI rendering details
- Configuration wiring

## Test Structure

- **Names**: Describe the behavior under test (e.g. `returns zero when input is empty`, `throws when schema is invalid`)
- **Pattern**: Arrange → Act → Assert
- **Setup**: Minimal per test; no shared mutable state

## Output Expectations

When designing or reviewing unit tests:

1. **Propose a focused unit test plan** – list behaviors to cover, grouped by function or module
2. **Show example unit test cases** – concrete tests with inputs and expected outputs
3. **Identify edge cases** – empty inputs, boundaries, invalid data, error paths
4. **Call out hard-to-unit-test logic** – explain why (e.g. tightly coupled to DB, framework, or I/O) and suggest extraction or acceptance that it belongs in integration tests

## Example Test Cases

```typescript
// Good: pure function, explicit in/out
describe("calculateDiscount", () => {
  it("returns 0 when quantity is 0", () => {
    expect(calculateDiscount(0, 100)).toBe(0);
  });
  it("applies 10% when quantity >= 10", () => {
    expect(calculateDiscount(10, 100)).toBe(10);
  });
  it("throws when unitPrice is negative", () => {
    expect(() => calculateDiscount(1, -1)).toThrow("unitPrice must be >= 0");
  });
});

// Avoid: testing framework or I/O
// - "renders button with correct label" (UI detail)
// - "calls API and returns data" (network)
```

## Quick Checklist

- [ ] Each test validates a single behavior
- [ ] No DB, network, or filesystem
- [ ] No mocks of internal logic; mocks only for external deps if needed
- [ ] Arrange → Act → Assert; minimal shared state
- [ ] Edge cases and error paths considered
- [ ] Test names describe behavior, not implementation
