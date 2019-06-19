import readlineSync from 'readline-sync';

export const calculation = (name) => {

	const correctAnswerCalculations = (numOne, numTwo, oper) => {
		switch	(oper)
		{
			case '*':
				return numOne * numTwo;
			
			case '+' : 
				return numOne + numTwo;

			case '-' :
				return numOne - numTwo;
		}
	}
			

	const num1 = Math.round(Math.random() * 100);
	const num2 = Math.round(Math.random() * 100);

	const operations = '+-*'

	const operator = operations.charAt(Math.floor(Math.random() * operations.length));

	console.log('Question: ' + num1 + operator + num2);

	const yourAnswer = readlineSync.question('Your answer:');
		
	let success = true;

	if(yourAnswer == correctAnswerCalculations(num1, num2, operator)) {
		console.log('Correct!');
		return success;
	}

	else {
		console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswerCalculations(num1, num2, operator)} \nLet\'s try again, ${name}`);		    	   
	    return;
	}
};

































// export const calculation = (name) => {

// 	const correctAnswerCalculations = (numOne, numTwo, oper) => {
// 		switch	(oper)
// 		{
// 			case '*':
// 				return numOne * numTwo;
			
// 			case '+' : 
// 				return numOne + numTwo;

// 			case '-' :
// 				return numOne - numTwo;
// 		}
// 	}
			
// 	for (let i = 1; i <= 3; i++) {

// 		const num1 = Math.round(Math.random() * 100);
// 		const num2 = Math.round(Math.random() * 100);

// 		const operations = '+-*'

// 		const operator = operations.charAt(Math.floor(Math.random() * operations.length));

// 		console.log('Question: ' + num1 + operator + num2);

// 		const yourAnswer = readlineSync.question('Your answer:');
		

// 		if(yourAnswer == correctAnswerCalculations(num1, num2, operator)) {
// 		    console.log('Correct!');
// 		}
// 		else {
// 		    console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswerCalculations(num1, num2, operator)} \nLet\'s try again, ${name}`);		    	   
// 		    return;
// 		}
// 	}

//   	console.log(`Congratulations, ${name}!`);
// };



