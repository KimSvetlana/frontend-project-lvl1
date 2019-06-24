import { randomNumberGenerator } from '../tools/mathFun';

const isEven = () => {
  const correctAnswer = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const num1 = randomNumberGenerator(100);
  console.log(`Question: ${num1}`);

  const answer = correctAnswer(num1);
  return answer;
};

export default isEven;
