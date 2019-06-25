import { applyOperation, randomNumberGenerator } from '../tools/mathFun';

const calculate = (methodName) => {
  if (methodName === 'getDescription') {
    return 'Welcome to the Brain Games!\nWhat is the result of the expression?';
  }
  if (methodName === 'play') {
    const num1 = randomNumberGenerator(100);
    const num2 = randomNumberGenerator(100);

    const operations = '+-*';

    const operator = operations.charAt(randomNumberGenerator(operations.length - 1));

    const question = `Question: ${num1}${operator}${num2}`;

    const answer = (applyOperation(operator, num1, num2)).toString();
    return {
      question,
      answer,
    };
  }
};

export default calculate;
