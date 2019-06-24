import { randomNumberGenerator } from '../tools/mathFun';

const prime = () => {
  const correctAnsverPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const num1 = randomNumberGenerator(100);
  console.log(`Question: ${num1}`);

  const answer = correctAnsverPrime(num1);
  return answer.toString();
};

export default prime;
