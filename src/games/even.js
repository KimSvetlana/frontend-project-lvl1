import randomNumberGenerator from '../NumberGenerator';
import playGame from '..';

const isEven = num => num % 2 === 0;

const getDataForRound = () => {
  const question = `${randomNumberGenerator(0, 100)}`;

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};
const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  playGame(gameDescription, getDataForRound);
};
