import readlineSync from 'readline-sync';

const isEven = (name) => {
  const correctAnswer = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }

    return 'no';
  };

  const num1 = Math.round(Math.random() * 100);
  console.log(`Question: ${num1}`);
  const yourAnswer = readlineSync.question('Your answer:');

  // const answer = correctAnswer(num1);
  // return answer;

  if (correctAnswer(num1) === yourAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer(num1)} \nLet's try again, ${name}`);
  return false;
};

export default isEven;
