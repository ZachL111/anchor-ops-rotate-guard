# Anchor Ops Rotate Guard Walkthrough

I use this file as a small checklist before changing the JavaScript implementation.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 165 | ship |
| stress | rename risk | 199 | ship |
| edge | operator cost | 140 | ship |
| recovery | idempotence | 127 | watch |
| stale | dry-run spread | 231 | ship |

Start with `stale` and `recovery`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around rename risk and idempotence.
