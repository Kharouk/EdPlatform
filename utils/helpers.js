export const convertDecimalToPercentage = (num) => `${~~(num * 100)}%`;

export const wait = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
