import { convertDecimalToPercentage } from '../helpers';

describe('convertDecimalToPercentage', () => {
  test.each`
    decimal    | expected
    ${0.66642} | ${'66%'}
    ${0.89221} | ${'89%'}
    ${0.0123}  | ${'1%'}
  `(
    'convertDecimalToPercentage($decimal) to be $expected',
    ({ decimal, expected }) => {
      expect(convertDecimalToPercentage(decimal)).toBe(expected);
    }
  );
});
