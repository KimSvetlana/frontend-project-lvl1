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

export const calculation = (name) => {

	const correctAnswerCalculations = (numOne, numTwo, oper) => eval(`${Number(numOne)}${(oper)}${Number(numTwo)}`);
		
	for (let i = 1; i <= 3; i++) {

		const num1 = Math.round(Math.random() * 100);
		const num2 = Math.round(Math.random() * 100);

		const operations = '+-*'

		const operand = operations.charAt(Math.floor(Math.random() * operations.length));

		console.log('Question: ' + num1 + operand + num2);

		const yourAnswer = readlineSync.question('Your answer:');
		

		if(yourAnswer == correctAnswerCalculations(num1, num2, operand)) {
		    console.log('Correct!');
		}
		else {
		    console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswerCalculations(num1, num2, operand)} \nLet\'s try again, ${name}`);		    	   
		    return;
		}
	}

  	console.log(`Congratulations, ${name}!`);
};


export const greatestDivider = (name) => {

	const correctAnsverDev = (numOne, numTwo) => {

		let greatDivider = 1;

		for (let i = 2; i <= Math.min(numOne, numTwo); i++) {

			if (numOne % i === 0 && numTwo % i === 0) {
				
				let divider1 = i;

				if (divider1 > greatDivider) {

					greatDivider = divider1;
				}

			}
		}

		return greatDivider; 
	}

	for (let i = 1; i <= 3; i++) {

		const num1 = Math.round(Math.random() * 100);
		const num2 = Math.round(Math.random() * 100);

		console.log(`Question: ${num1} ${num2}`);

		const yourAnswer = readlineSync.question('Your answer:');

		if(yourAnswer == correctAnsverDev(num1, num2)) {
		console.log('Correct!');
		}

		else {
		console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnsverDev(num1, num2)} \nLet\'s try again, ${name}`);		    	   
		return;
		}
	}

	console.log(`Congratulations, ${name}!`);
}