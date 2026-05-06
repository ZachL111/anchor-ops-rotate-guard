# Field Notes

I would read this project from the data inward: cases first, implementation second.

The domain cases cover `dry-run spread`, `rename risk`, `operator cost`, and `idempotence`. They sit beside the smaller starter fixture so the project has both a compact scoring check and a domain-flavored review check.

`stale` is the strongest case at 231 on `dry-run spread`. `recovery` is the cautious anchor at 127 on `idempotence`.

The language-specific addition keeps the review model in native modules with a direct node check.
