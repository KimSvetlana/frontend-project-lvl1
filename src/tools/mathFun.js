export const applyOperation = (operator, numOne, numTwo) => {
  switch (operator) {
    case '*':
      return numOne * numTwo;
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    default:
      return 0;
  }
};

export const randomNumberGenerator = range => Math.round(Math.random() * range);
