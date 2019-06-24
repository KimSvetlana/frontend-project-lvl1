import { ApplyOperation, randomNumberGenerator } from '../tools/mathFun';

const calculation = () => {
  const num1 = randomNumberGenerator(100);
  const num2 = randomNumberGenerator(100);

  const operations = '+-*';

  const operator = operations.charAt(randomNumberGenerator(operations.length - 1));

  console.log(`Question: ${num1}${operator}${num2}`);

  const answer = ApplyOperation(operator, num1, num2);
  return answer.toString();
};

export default calculation;
