import type { TestStructure } from '../../schema';

const s: TestStructure = {
  "id": "eq",
  "category": "relationships",
  "icon": "smile",
  "minutes": [
    5,
    7
  ],
  "dims": [
    "selfAwareness",
    "selfRegulation",
    "empathy",
    "social"
  ],
  "items": [
    {
      "dim": "selfAwareness"
    },
    {
      "dim": "selfRegulation"
    },
    {
      "dim": "empathy"
    },
    {
      "dim": "social"
    },
    {
      "dim": "selfAwareness",
      "reverse": true
    },
    {
      "dim": "selfRegulation",
      "reverse": true
    },
    {
      "dim": "empathy"
    },
    {
      "dim": "social",
      "reverse": true
    },
    {
      "dim": "selfAwareness"
    },
    {
      "dim": "selfRegulation"
    },
    {
      "dim": "empathy",
      "reverse": true
    },
    {
      "dim": "social"
    },
    {
      "dim": "selfAwareness"
    },
    {
      "dim": "selfRegulation"
    },
    {
      "dim": "empathy"
    },
    {
      "dim": "social"
    },
    {
      "dim": "selfAwareness",
      "reverse": true
    },
    {
      "dim": "selfRegulation",
      "reverse": true
    },
    {
      "dim": "empathy"
    },
    {
      "dim": "social",
      "reverse": true
    },
    {
      "dim": "selfAwareness"
    },
    {
      "dim": "selfRegulation"
    },
    {
      "dim": "empathy",
      "reverse": true
    },
    {
      "dim": "social"
    }
  ],
  "scale": [
    1,
    2,
    3,
    4,
    5
  ],
  "result": "profile",
  "input": "circles"
};

export default s;
