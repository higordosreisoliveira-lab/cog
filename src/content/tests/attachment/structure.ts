import type { TestStructure } from '../../schema';

const s: TestStructure = {
  "id": "attachment",
  "category": "relationships",
  "icon": "link",
  "minutes": [
    4,
    6
  ],
  "dims": [
    "anxiety",
    "avoidance"
  ],
  "items": [
    {
      "dim": "anxiety"
    },
    {
      "dim": "avoidance"
    },
    {
      "dim": "anxiety"
    },
    {
      "dim": "avoidance",
      "reverse": true
    },
    {
      "dim": "anxiety",
      "reverse": true
    },
    {
      "dim": "avoidance"
    },
    {
      "dim": "anxiety"
    },
    {
      "dim": "avoidance"
    },
    {
      "dim": "anxiety"
    },
    {
      "dim": "avoidance",
      "reverse": true
    },
    {
      "dim": "anxiety",
      "reverse": true
    },
    {
      "dim": "avoidance"
    },
    {
      "dim": "anxiety"
    },
    {
      "dim": "avoidance"
    },
    {
      "dim": "anxiety",
      "reverse": true
    },
    {
      "dim": "avoidance"
    },
    {
      "dim": "anxiety"
    },
    {
      "dim": "avoidance",
      "reverse": true
    }
  ],
  "scale": [
    1,
    2,
    3,
    4,
    5
  ],
  "result": "quadrant",
  "input": 'circles',
  "quadrant": {
    "x": "avoidance",
    "y": "anxiety",
    "lowLow": "secure",
    "highLow": "avoidant",
    "lowHigh": "anxious",
    "highHigh": "fearful"
  }
};

export default s;
