import readlineSync from 'readline-sync';


const isPrime = (name) => {
  const correctAnsverPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const num1 = Math.round(Math.random() * 100);
  console.log(`Question: ${num1}`);
  const yourAnswer = readlineSync.question('Your answer:');

  const success = true;

  if (correctAnsverPrime(num1) === yourAnswer) {
    console.log('Correct!');
    return success;
  }

  console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnsverPrime(num1)} \nLet's try again, ${name}`);
  return false;
};

export default isPrime;
