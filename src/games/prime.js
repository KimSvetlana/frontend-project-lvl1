import randomNumberGenerator from '../NumberGenerator';
import playGame from '..';


const isPrime = (number) => {
  if (number === 2) {
    return false;
  }
  if (number > 2) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return true;
      }
    }
  }
};

const getDataForRound = () => {
  const question = `${randomNumberGenerator(0, 100)}`;

  const correctAnswer = isPrime(question) ? 'no' : 'yes';
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => {
  playGame(gameDescription, getDataForRound);
};
