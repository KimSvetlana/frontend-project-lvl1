import { randomNumberGenerator } from '../tools/mathFun';

const isEven = num => num % 2 === 0;

const correctAnswer = num => (isEven(num) ? 'yes' : 'no');

const even = (methodName) => {
  if (methodName === 'getDescription') {
    return 'Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".';
  }
  if (methodName === 'play') {
    const num = randomNumberGenerator(100);

    const question = `Question: ${num}`;

    const answer = correctAnswer(num);

    return {
      question,
      answer,
    };
  }
};

export default even;
