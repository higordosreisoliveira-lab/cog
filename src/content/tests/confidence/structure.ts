import type { TestStructure } from '../../schema';

const s: TestStructure = {
  "id": "confidence",
  "category": "personality",
  "icon": "trend",
  "minutes": [
    4,
    5
  ],
  "dims": [
    "selfWorth",
    "capability",
    "resilience",
    "assertiveness"
  ],
  "items": [
    {
      "dim": "selfWorth"
    },
    {
      "dim": "capability"
    },
    {
      "dim": "resilience"
    },
    {
      "dim": "assertiveness"
    },
    {
      "dim": "selfWorth",
      "reverse": true
    },
    {
      "dim": "capability"
    },
    {
      "dim": "resilience"
    },
    {
      "dim": "assertiveness",
      "reverse": true
    },
    {
      "dim": "selfWorth"
    },
    {
      "dim": "capability",
      "reverse": true
    },
    {
      "dim": "resilience"
    },
    {
      "dim": "assertiveness"
    },
    {
      "dim": "selfWorth"
    },
    {
      "dim": "capability"
    },
    {
      "dim": "resilience",
      "reverse": true
    },
    {
      "dim": "assertiveness"
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
