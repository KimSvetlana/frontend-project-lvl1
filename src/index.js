import readlineSync from 'readline-sync';

export const yourName = () => {
	const name = readlineSync.question('May I have your name?');
	console.log(`Hello, ${name}!`);
	return name;
};

export const play = (fun, name) => {

	let game = fun(name);

	for (let i = 1; i <= 3; i++) {	

		if (game){
			return;
		}

	}
	console.log(`Congratulations, ${name}!`)		
}