import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 72,
    "capacity": 87,
    "latency": 15,
    "risk": 9,
    "weight": 7,
    "score": 189,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 98,
    "capacity": 76,
    "latency": 11,
    "risk": 25,
    "weight": 9,
    "score": 154,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 102,
    "capacity": 96,
    "latency": 27,
    "risk": 8,
    "weight": 13,
    "score": 276,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
