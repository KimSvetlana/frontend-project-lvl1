import { applyOperation, randomNumberGenerator } from '../tools/mathFun';

const arithmeticProgression = (methodName) => {
  if (methodName === 'getDescription') {
    return 'Welcome to the Brain Games!\nWhat number is missing in the progression?';
  }
  const operations = '+-';
  const operatorProgression = operations.charAt(randomNumberGenerator(operations.length - 1));

  const firstMember = randomNumberGenerator(100);
  const progressionStep = randomNumberGenerator(10);

  let progression = '';
  const progressionLength = 10;
  let unknownProgressionMember = 0;
  const unknownProgressionMemberIndex = randomNumberGenerator(9);
  let currentMember = firstMember;

  if (methodName === 'play') {
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

    const answer = unknownProgressionMember.toString();
    return {
      question,
      answer,
    };
  }
};

export default arithmeticProgression;
