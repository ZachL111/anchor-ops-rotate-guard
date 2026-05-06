# anchor-ops-rotate-guard

`anchor-ops-rotate-guard` keeps a focused JavaScript implementation around automation. The project goal is to develop a JavaScript command-oriented project for rotate scenarios with transition tables, invalid-transition tests, and no credentials or hosted services.

## Why It Exists

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Anchor Ops Rotate Guard Review Notes

`stale` and `recovery` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## Features

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/anchor-ops-rotate-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `dry-run spread` and `idempotence`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture Notes

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The JavaScript implementation avoids hidden state so fixture changes are easy to reason about.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Tests

The verifier is intentionally local. It should fail if the fixture score math, lane assignment, or language-specific test drifts.

## Limitations And Roadmap

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
