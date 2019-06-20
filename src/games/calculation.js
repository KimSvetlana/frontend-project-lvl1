import readlineSync from 'readline-sync';
import ApplyOperation from './mathFun';

const calculation = (name) => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);

  const operations = '+-*';

  const operator = operations.charAt(Math.floor(Math.random() * operations.length));

  console.log(`Question: ${num1}${operator}${num2}`);

  const yourAnswer = readlineSync.question('Your answer:');

  if (Number(yourAnswer) === ApplyOperation(operator, num1, num2)) {
    console.log('Correct!');
    return true;
  }

  console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${ApplyOperation(operator, num1, num2)} \nLet's try again, ${name}`);
  return false;
};

export default calculation;
