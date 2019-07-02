import getRandom from '../randomNumber';
import playGame from '..';

const progressionLength = 10;

const getRoundData = () => {
  const firstMember = getRandom(0, 100);
  const progressionStep = getRandom(-10, 10);

  let progression = '';
  const hiddenMemberIndex = getRandom(0, (progressionLength - 1));

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenMemberIndex) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${firstMember + progressionStep * i}`;
    }
  }

  const question = progression;
  const correctAnswer = (firstMember + progressionStep * hiddenMemberIndex).toString();
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'What number is missing in the progression?';

export default () => {
  playGame(gameDescription, getRoundData);
};
