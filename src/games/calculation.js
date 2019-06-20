import ApplyOperation from './mathFun';

const calculation = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);

  const operations = '+-*';

  const operator = operations.charAt(Math.floor(Math.random() * operations.length));

  console.log(`Question: ${num1}${operator}${num2}`);

  const answer = ApplyOperation(operator, num1, num2);
  return answer.toString();
};

export default calculation;
