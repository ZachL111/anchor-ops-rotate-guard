# Review Journal

I treated `anchor-ops-rotate-guard` as a project where the smallest useful behavior should still be inspectable.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 165, lane `ship`
- `stress`: `rename risk`, score 199, lane `ship`
- `edge`: `operator cost`, score 140, lane `ship`
- `recovery`: `idempotence`, score 127, lane `watch`
- `stale`: `dry-run spread`, score 231, lane `ship`

## Note

The useful failure mode here is a wrong decision on a named case, not a vague style disagreement.
