import { ApplyOperation, randomNumberGenerator } from '../tools/mathFun';

const arithmeticProgression = () => {
  const operations = '+-';
  const operatorProgression = operations.charAt(randomNumberGenerator(operations.length - 1));

  const firstMember = randomNumberGenerator(100);
  const progressionStep = randomNumberGenerator(10);

  let progression = '';
  const progressionLength = 10;
  let unknownProgressionMember = 0;
  const unknownProgressionMemberIndex = randomNumberGenerator(9);
  let currentMember = firstMember;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === unknownProgressionMemberIndex) {
      unknownProgressionMember = currentMember;
      progression += '.. ';
    } else {
      progression += `${currentMember} `;
    }

    currentMember = ApplyOperation(operatorProgression, currentMember, progressionStep);
  }

  console.log(`Question: ${progression} `);

  const answer = unknownProgressionMember;
  return answer.toString();
};

export default arithmeticProgression;
