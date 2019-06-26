import { applyOperation, randomNumberGenerator } from '../tools/mathFun';
import playGame from '../index';

const playProgressionRound = () => {
  const operations = '+-';
  const operatorProgression = operations.charAt(randomNumberGenerator(operations.length - 1));

  const firstMember = randomNumberGenerator(0, 100);
  const progressionStep = randomNumberGenerator(0, 10);

  let progression = '';
  const progressionLength = 10;
  let unknownProgressionMember = 0;
  const unknownProgressionMemberIndex = randomNumberGenerator(0, 9);
  let currentMember = firstMember;


  for (let i = 0; i < progressionLength; i += 1) {
    if (i === unknownProgressionMemberIndex) {
      unknownProgressionMember = currentMember;
      progression += '.. ';
    } else {
      progression += `${currentMember} `;
    }

    currentMember = applyOperation(operatorProgression, currentMember, progressionStep);
  }

  const question = `Question: ${progression} `;

  const correctAnswer = unknownProgressionMember.toString();
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'What number is missing in the progression?';

const launchProgressionGame = () => {
  playGame(gameDescription, playProgressionRound);
};

export default launchProgressionGame;
