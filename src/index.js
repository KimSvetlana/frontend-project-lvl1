import readlineSync from 'readline-sync';

const play = (game) => {
  console.log(game('getDescription'));
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  const numberOfRounds = 3;

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const functionValues = game('play');
    const correctAnswer = functionValues.answer;

    console.log(functionValues.question);

    const userAnswer = readlineSync.question('Your answer:');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer} `);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default play;
