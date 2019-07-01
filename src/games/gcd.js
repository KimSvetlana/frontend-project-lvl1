import randomNumberGenerator from '../NumberGenerator';
import playGame from '..';

const greatestCommonDivisor = (numOne, numTwo) => {
  let greatestDivisor = 1;

  for (let i = 2; i <= Math.min(numOne, numTwo); i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      greatestDivisor = i;
    }
  }
  return greatestDivisor;
};

const getDataForRound = () => {
  const num1 = randomNumberGenerator(0, 100);
  const num2 = randomNumberGenerator(0, 100);

  const question = `${num1} ${num2}`;

  const correctAnswer = (greatestCommonDivisor(num1, num2)).toString();
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => {
  playGame(gameDescription, getDataForRound);
};
