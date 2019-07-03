import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (gameDescription, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, correctAnswer } = getRoundData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer:');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
