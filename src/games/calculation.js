import getRandom from '../NumberGenerator';
import playGame from '..';

const operations = '+-*';

const calculate = (operator, a, b) => {
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

const getRoundData = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);

  const operator = operations.charAt(getRandom(0, operations.length - 1));

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = calculate(operator, a, b);
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'What is the result of the expression?';

export default () => {
  playGame(gameDescription, getRoundData);
};
