import { randomNumberGenerator } from '../tools/mathFun';
import playGame from '../index';

const greatestCommonDivisor = (numOne, numTwo) => {
  let greatestDivisor = 1;

  for (let i = 2; i <= Math.min(numOne, numTwo); i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      greatestDivisor = i;
    }
  }
  return greatestDivisor;
};

const playGcdRound = () => {
  const num1 = randomNumberGenerator(0, 100);
  const num2 = randomNumberGenerator(0, 100);

  const question = `Question: ${num1} ${num2}`;

  const correctAnswer = (greatestCommonDivisor(num1, num2)).toString();
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const launchGcdGame = () => {
  playGame(gameDescription, playGcdRound);
};

export default launchGcdGame;
