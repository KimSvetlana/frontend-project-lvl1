import { randomNumberGenerator } from '../tools/mathFun';

const correctAnsverDev = (numOne, numTwo) => {
  let greatDivider = 1;

  for (let i = 2; i <= Math.min(numOne, numTwo); i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      greatDivider = i;
    }
  }
  return greatDivider;
};

const greatestDivider = (methodName) => {
  if (methodName === 'getDescription') {
    return 'Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.';
  }
  if (methodName === 'play') {
    const num1 = randomNumberGenerator(100);
    const num2 = randomNumberGenerator(100);

    const question = `Question: ${num1} ${num2}`;

    const answer = (correctAnsverDev(num1, num2)).toString();
    return {
      question,
      answer,
    };
  }
};

export default greatestDivider;
