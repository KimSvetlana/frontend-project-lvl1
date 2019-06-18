import readlineSync from 'readline-sync';

export const yourName = () => {
	const name = readlineSync.question('May I have your name?');
	console.log(`Hello, ${name}!`);
	return name;
};

export const isEven = (name) => {

	const correctAnswer = (num) => {
		if (num % 2 === 0) {
			return 'yes';
		}
		else {
			return 'no';
		}
	}
	
	
	for (let i = 1; i <= 3; i++) {
		const num1 = Math.round(Math.random() * 100);
		console.log('Question: ' + num1);
		const yourAnswer = readlineSync.question('Your answer:');
	
		if(correctAnswer(num1) === yourAnswer) {
		    console.log('Correct!');
		}
		else{
		    console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer(num1)} \nLet\'s try again, ${name}`);		    	   
		    return;
		}
	}
	
	console.log(`Congratulations, ${name}!`);
}
