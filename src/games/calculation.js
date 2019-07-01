import randomNumberGenerator from '../NumberGenerator';
import playGame from '..';

const operations = '+-*';

const makeCalculate = (operator, a, b) => {
  switch (operator) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return null;
  }
};

const getDataForRound = () => {
  const num1 = randomNumberGenerator(0, 100);
  const num2 = randomNumberGenerator(0, 100);

  const operator = operations.charAt(randomNumberGenerator(0, operations.length - 1));

  const question = `${num1}${operator}${num2}`;

  const correctAnswer = (makeCalculate(operator, num1, num2)).toString();
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'What is the result of the expression?';

export default () => {
  playGame(gameDescription, getDataForRound);
};
