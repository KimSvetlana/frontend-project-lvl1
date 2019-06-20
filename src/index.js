import readlineSync from 'readline-sync';

export const yourName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

export const play = (fun, name) => {
  for (let i = 1; i <= 3; i += 1) {
    const answer = fun();
    const yourAnswer = readlineSync.question('Your answer:');

    if (yourAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${answer} \nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
