import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 59, slack: 27, drag: 21, confidence: 83 };
assert.equal(domainReviewScore(item), 165);
assert.equal(domainReviewLane(item), "ship");
