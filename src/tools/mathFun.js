export const ApplyOperation = (operator, numOne, numTwo) => {
  switch (operator) {
    case '*':
      return numOne * numTwo;
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    default:
      break;
  }
};

export const randomNumberGenerator = range => Math.round(Math.random() * range);
