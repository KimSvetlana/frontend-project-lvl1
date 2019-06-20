import ApplyOperation from './mathFun';

const arithmeticProgression = () => {
  const operations = '+-';

  const operator = operations.charAt(Math.round(Math.random() * (operations.length - 1)));

  const firstMember = Math.round(Math.random() * 100);
  const progressStep = Math.round(Math.random() * 10);

  let progression = '';
  let unknown = 0;
  const unknownIndex = Math.round(Math.random() * 9);
  let currentMember = firstMember;

  for (let i = 0; i < 10; i += 1) {
    if (i === unknownIndex) {
      unknown = currentMember;
      progression += '.. ';
    } else {
      progression += `${currentMember} `;
    }

    currentMember = ApplyOperation(operator, currentMember, progressStep);
  }

  console.log(`Question: ${progression} `);

  const answer = unknown;
  return answer.toString();
};

export default arithmeticProgression;
