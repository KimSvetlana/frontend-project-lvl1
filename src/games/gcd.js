import getRandom from '../randomNumber';
import playGame from '..';

const greatestCommonDivisor = (a, b) => {
  let greatestDivisor = 1;

  for (let i = 2; i <= Math.min(a, b); i += 1) {
    if (a % i === 0 && b % i === 0) {
      greatestDivisor = i;
    }
  }
  return greatestDivisor;
};

const getRoundData = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);

  const question = `${a} ${b}`;
  const correctAnswer = greatestCommonDivisor(a, b);
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => {
  playGame(gameDescription, getRoundData);
};
