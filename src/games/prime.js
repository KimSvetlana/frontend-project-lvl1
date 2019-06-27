import randomNumberGenerator from '../tools/mathFun';
import playGame from '../index';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrimeRound = () => {
  const num = randomNumberGenerator(0, 100);
  const question = `Question: ${num}`;

  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const launchPrimeGame = () => {
  playGame(gameDescription, playPrimeRound);
};

export default launchPrimeGame;
