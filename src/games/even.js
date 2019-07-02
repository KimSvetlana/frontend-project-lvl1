import randomNumberGenerator from '../NumberGenerator';
import playGame from '..';

const isEven = n => n % 2 === 0;

const getRoundData = () => {
  const question = randomNumberGenerator(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};
const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  playGame(gameDescription, getRoundData);
};
