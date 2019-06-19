import readlineSync from 'readline-sync';

export const arithmeticProgression = (name) =>{

	// const operations = '+-'

	// const operator = operations.charAt(Math.round(Math.random() * operations.length));

	const progressStep = Math.round(Math.random() * 10);
	let firstMemberProgression = Math.round(Math.random() * 100);


	let progression = '';

	for(let i = 1 ; i <= 10; i++){

		// switch (operator)
		// {			
		// 	case '+' : 

		// 		firstMemberProgression += progressStep;

		// 	case '-' :
		// 		firstMemberProgression -= progressStep;
		// }
		firstMemberProgression += progressStep;
		progression += firstMemberProgression + ' ';
	}
	console.log(progression);
	console.log(progression.length, firstMemberProgression, progressStep);

	const unknown = firstMemberProgression + (Math.round(Math.random() * 10)- 1) * progressStep;
	const progressForQuestion = progression.replace(unknown, '..');
	
	console.log(progressForQuestion, unknown);

	console.log(`Question: ${progressForQuestion} `);

		const yourAnswer = readlineSync.question('Your answer:');

		if(yourAnswer ==  unknown) {
		console.log('Correct!');
		}

		else {
		console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${unknown} \nLet\'s try again, ${name}`);		    	   
		return;
		}
}
