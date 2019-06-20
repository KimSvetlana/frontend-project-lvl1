import readlineSync from 'readline-sync';

const greatestDivider = (name) => {
  const correctAnsverDev = (numOne, numTwo) => {
    let greatDivider = 1;

    for (let i = 2; i <= Math.min(numOne, numTwo); i += 1) {
      if (numOne % i === 0 && numTwo % i === 0) {
        greatDivider = i;
      }
    }
    return greatDivider;
  };

  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);

  console.log(`Question: ${num1} ${num2}`);

  const yourAnswer = readlineSync.question('Your answer:');

  if (Number(yourAnswer) === correctAnsverDev(num1, num2)) {
    console.log('Correct!');
    return true;
  }

  console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnsverDev(num1, num2)} \nLet's try again, ${name}`);
  return false;
};

export default greatestDivider;
