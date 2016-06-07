'use strict';

import templates from '../../../templates';
import generator from './generator.html';

function learnGenerator() {
	templates.useContent(generator);
  	alert('Learn generator');

	generatorBasics();
	generatorIerator();
	generatorComposition();
	generatorInsideOut();
	generatorErrors();
  	generatorAsync();
};

module.exports = learnGenerator;

function generatorBasics() {
	alert('Basics');
	console.log('<<<<<   Basics   >>>>>');

	function* generateSequence() {
		yield 1;
		yield 2;
		return 3;
	}

	let generator = generateSequence();

	console.log(generator);

	let one = generator.next();
	console.log(JSON.stringify(one));

	let two = generator.next();
	console.log(JSON.stringify(two));

	let three = generator.next();
	console.log(JSON.stringify(three));

	let next = generator.next();
	console.log(JSON.stringify(next));
}

function generatorIerator() {
	alert('Generator - Iterator');
	console.log('<<<<<   Generator - Iterator   >>>>>');

	function* generateSequence() {
		yield 1;
		yield 2;
		return 3;
	}

	let generator = generateSequence();

	for(let value of generator) {
		console.log(value);
	}
}

function generatorComposition() {
	alert('Composition');
	console.log('<<<<<   Composition   >>>>>');

	function* generateSequence(start, end) {
		for (let i = start; i <= end; i++) yield i;
	}
	
	function* generateAlphaNum() {

		// 0..9
		yield* generateSequence(48, 57);

		// A..Z
		yield* generateSequence(65, 90);

		// a..z
		yield* generateSequence(97, 122);

	}

	let str = '';

	for(let code of generateAlphaNum()) {
		str += String.fromCharCode(code);
	}

	console.log(str);
}

function generatorInsideOut() {
	alert('Inside - Out');
	console.log('<<<<<   Inside - Out   >>>>>');

	function* gen() {
		let ask1 = yield 'Сколько будет 2 + 2?';
		console.log(ask1);

		let ask2 = yield 'Сколько будет 3 + 3?';
		console.log(ask2);
	}

	let generator = gen();

	console.log( generator.next().value );
	console.log( generator.next(4).value );
	console.log( generator.next(9).done );
}

function generatorErrors() {
	alert('Errors');
	console.log('<<<<<   Errors   >>>>>');

	function* gen() {
		try {
			// error occurs in this line
			let result = yield '2 + 2?';
		} catch(e) {
			console.log(e); // displays an error
		}
	}

	let generator = gen();

	let question = generator.next().value;

	generator.throw(new Error('Sorry, I don\'t know'));

	/*	If no handler inside of generator - exception goes outside 
	 *
	 * try {
	 * 	generator.throw(new Error('Sorry, I don\'t know'));
	 * } catch(e) {
	 * 	console.log(e);
	 * }
	 *
	 */
}

function generatorAsync() {
	alert('Async code');
	console.log('<<<<<   Async code   >>>>>');

	function* showUserAvatar() {

		let userFetch = yield fetch('/user.json');
		let userInfo = yield userFetch.json();

		let githubFetch = yield fetch(`https://api.github.com/users/${userInfo.name}`);
		let githubUserInfo = yield githubFetch.json();

		let img = new Image();
		img.src = githubUserInfo.avatar_url;
		img.className = 'generator__github-avatar';
		document.getElementsByClassName('content')[0].appendChild(img);

		yield new Promise(resolve => setTimeout(resolve, 3000));

		img.remove();

		return `Loaded avatar source: ${img.src}`;
	}

	function execute(generator, yieldValue) {

		let next = generator.next(yieldValue);

		console.log(`Yielded value next: ${JSON.stringify(next)}`);

		if (!next.done) {
			next.value.then(
				result => execute(generator, result),
				err => generator.throw(err)
			);
		} else {
			console.log(next.value);
		}

	}

	execute( showUserAvatar() );

	/* use co libraty insted of execute function for more functionality */
	
}



