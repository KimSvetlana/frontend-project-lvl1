import readlineSync from 'readline-sync';

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


	const num1 = Math.round(Math.random() * 100);
	const num2 = Math.round(Math.random() * 100);

	console.log(`Question: ${num1} ${num2}`);

	const yourAnswer = readlineSync.question('Your answer:');

	let success = true;

	if(yourAnswer == correctAnsverDev(num1, num2)) {
		console.log('Correct!');
		return success
	}

	else {
		console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnsverDev(num1, num2)} \nLet\'s try again, ${name}`);		    	   
		return;
	}
}

































// export const greatestDivider = (name) => {

// 	const correctAnsverDev = (numOne, numTwo) => {

// 		let greatDivider = 1;

// 		for (let i = 2; i <= Math.min(numOne, numTwo); i++) {

// 			if (numOne % i === 0 && numTwo % i === 0) {
				
// 				let divider1 = i;

// 				if (divider1 > greatDivider) {

// 					greatDivider = divider1;
// 				}

// 			}
// 		}

// 		return greatDivider; 
// 	}

// 	for (let i = 1; i <= 3; i++) {

// 		const num1 = Math.round(Math.random() * 100);
// 		const num2 = Math.round(Math.random() * 100);

// 		console.log(`Question: ${num1} ${num2}`);

// 		const yourAnswer = readlineSync.question('Your answer:');

// 		if(yourAnswer == correctAnsverDev(num1, num2)) {
// 		console.log('Correct!');
// 		}

// 		else {
// 		console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnsverDev(num1, num2)} \nLet\'s try again, ${name}`);		    	   
// 		return;
// 		}
// 	}

// 	console.log(`Congratulations, ${name}!`);
// }
