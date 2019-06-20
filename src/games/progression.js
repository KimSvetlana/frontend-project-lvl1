import readlineSync from 'readline-sync';
import ApplyOperation from './mathFun';

const arithmeticProgression = (name) => {
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

  const yourAnswer = readlineSync.question('Your answer:');

  const success = true;

  if (Number(yourAnswer) === unknown) {
    console.log('Correct!');
    return success;
  }


  console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${unknown} \nLet's try again, ${name}`);
  return false;
};

export default arithmeticProgression;
