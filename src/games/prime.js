import getRandom from '../randomNumber';
import playGame from '..';


const isPrime = (n) => {
  // negative, 0 and 1 are not prime
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const question = getRandom(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => {
  playGame(gameDescription, getRoundData);
};
