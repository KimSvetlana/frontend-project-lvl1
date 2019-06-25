import { randomNumberGenerator } from '../tools/mathFun';

const correctAnsverPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = (methodName) => {
  if (methodName === 'getDescription') {
    return 'Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no"';
  }
  if (methodName === 'play') {
    const num = randomNumberGenerator(100);
    const question = `Question: ${num}`;

    const answer = (correctAnsverPrime(num)).toString();
    return {
      question,
      answer,
    };
  }
};

export default prime;
