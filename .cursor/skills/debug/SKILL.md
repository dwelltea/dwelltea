---
name: debug
description: Guides systematic debugging by restating the problem, ranking root causes, identifying missing info, proposing minimal fixes, and defining confirmation steps. Use when debugging bugs, investigating failures, or when the user asks for help fixing or understanding an error.
---

# Systematic Debugging

Follow this process when debugging. **Do not guess.** Reason from symptoms and code.

## Process

### 1. Restate the problem clearly
- What exactly fails (behavior, error message, or symptom)?
- When does it happen (trigger, environment, inputs)?
- What was the expected vs actual outcome?

### 2. Identify likely root causes (ranked)
- List hypotheses ordered by likelihood or impact.
- Tie each to evidence: code paths, logs, or reproducible steps.
- Prefer causes that explain all observed symptoms.

### 3. Point out missing information or logs
- What would narrow down the cause (logs, stack traces, env, versions)?
- Where to add logging or checks if they are absent.
- What to reproduce locally or in a minimal case.

### 4. Propose minimal fixes or experiments
- One small change or experiment at a time.
- Prefer the least invasive fix that addresses the root cause.
- If unsure, suggest a diagnostic step (log, assert, test) before a code fix.

### 5. Explain how to confirm the fix
- What to run, click, or check to verify the fix.
- How to ensure the symptom is gone and no regression (e.g. existing tests, manual check).

## Principles

- **Reason from symptoms and code.** Use stack traces, logs, and code flow; avoid speculation.
- **Avoid guessing.** If evidence is insufficient, say so and ask for logs or steps instead of inventing causes.
- **Minimal changes.** Prefer the smallest change that fixes the issue; avoid refactors or “improvements” in the same step.
