import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 4, b: 3, action: Action.Multiply, expected: 12 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 0, b: 5, action: Action.Add, expected: 5 },
  { a: 100, b: 10, action: Action.Divide, expected: 10 },
  { a: 2, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: -3, b: 2, action: Action.Multiply, expected: -6 },
  { a: undefined, b: 2, action: Action.Add, expected: null },
  { a: 2, b: {}, action: Action.Subtract, expected: null },
  { a: 2, b: 3, action: 'no-action', expected: null },
  { a: 0, b: 0, action: Action.Divide, expected: NaN },
  { a: 2, b: 0.5, action: Action.Exponentiate, expected: Math.sqrt(2) },
  { a: -5, b: 3, action: Action.Exponentiate, expected: -125 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'calculates $a $action $b to be $expected',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      console.log(Number.isNaN(expected));
      Number.isNaN(expected)
        ? expect(result).toBeNaN()
        : expect(result).toBe(expected);
    },
  );
});
