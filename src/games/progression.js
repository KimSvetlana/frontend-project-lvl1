import randomNumberGenerator from '../NumberGenerator';
import playGame from '..';

const progressionLength = 10;

const getDataForRound = () => {
  const firstMember = randomNumberGenerator(0, 100);
  const progressionStep = randomNumberGenerator(-10, 10);

  let progression = '';
  let hiddenMember = 0;
  const hiddenMemberIndex = randomNumberGenerator(0, (progressionLength - 1));

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenMemberIndex) {
      hiddenMember = firstMember + progressionStep * i;
      progression = `${progression} .. `;
    } else {
      progression = `${progression} ${firstMember + progressionStep * i} `;
    }
  }
  const question = `${progression}`;

  const correctAnswer = hiddenMember.toString();
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'What number is missing in the progression?';

export default () => {
  playGame(gameDescription, getDataForRound);
};
