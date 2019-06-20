import readlineSync from 'readline-sync';

export const arithmeticProgression = (name) =>{

	const operations = '+-'

	const operator = operations.charAt(Math.round(Math.random() * (operations.length - 1)));

	let firstMember = Math.round(Math.random() * 100);
	const progressStep = Math.round(Math.random() * 10);
	
	let progression = '';
	let unknown = 0;
	let unknownIndex = Math.round(Math.random() * 9);
	let currentMember = firstMember;
	
	for(let i = 0 ; i < 10; i++){
		if (i == unknownIndex)
		{
			unknown = currentMember;
			progression += ".. ";
		}
		else{
			progression += currentMember + ' ';
		}

		switch (operator)
		{			
			case '+' : 
				currentMember += progressStep;
				break;

			case '-' :
				currentMember -= progressStep;
				break;
		}
	}
	// console.log(progression);
	// console.log(firstMember, operator + progressStep);

	// console.log(unknown);

	console.log(`Question: ${progression} `);

	const yourAnswer = readlineSync.question('Your answer:');

	let success = true;

	if(yourAnswer ==  unknown) {
		console.log('Correct!');
		return success;
	}

	else {
		console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${unknown} \nLet\'s try again, ${name}`);		    	   
		return false;
	}
}
