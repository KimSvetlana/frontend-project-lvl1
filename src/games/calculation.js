import randomNumberGenerator from '../tools/mathFun';
import playGame from '../index';

const makeCalculation = (operator, numOne, numTwo) => {
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

const playCalculateRound = () => {
  const num1 = randomNumberGenerator(0, 100);
  const num2 = randomNumberGenerator(0, 100);

  const operations = '+-*';

  const operator = operations.charAt(randomNumberGenerator(0, operations.length - 1));

  const question = `Question: ${num1}${operator}${num2}`;

  const correctAnswer = (makeCalculation(operator, num1, num2)).toString();
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'What is the result of the expression?';

const launchCalculateGame = () => {
  playGame(gameDescription, playCalculateRound);
};

export default launchCalculateGame;
