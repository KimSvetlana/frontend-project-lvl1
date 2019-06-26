import { randomNumberGenerator } from '../tools/mathFun';
import playGame from '../index';

const isEven = num => num % 2 === 0;

const playEvenRound = () => {
  const num = randomNumberGenerator(0, 100);

  const question = `Question: ${num}`;

  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};
const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const launchEvenGame = () => {
  playGame(gameDescription, playEvenRound);
};

export default launchEvenGame;
