'use strict';

import templates from '../../../templates';
import destructuring from './destructuring.html';

function learnDestructuring() {
	templates.useContent(destructuring);
  	alert('Learn destructuring');

	destructuringArray();
	destructuringArraySpread();
	destructuringArrayDefaultValues();
	destructuringObject();
	destructuringObjectSpread();
	destructuringObjectAfterDeclaration();
};

module.exports = learnDestructuring;

function destructuringArray() {
	alert('Array');
	console.log('<<<<<   Array   >>>>>');

	let [firstName, lastName] = ['John', 'Dou'];
	console.log(`First name: ${firstName}, Last name: ${lastName}`);

	let [ , , , , e, f] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
	console.log(`e: ${e}, f: ${f}`);
}

function destructuringArraySpread() {
	alert('Array Spread');
	console.log('<<<<<   Array Spread   >>>>>');


	let [ , , c, d, ...rest] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
	console.log(`c: ${c}, d: ${d}, rest: ${rest}`);
}

function destructuringArrayDefaultValues() {
	alert('Array Default Values');
	console.log('<<<<<   Array Default Values   >>>>>');


	let [first, last] = [];
	console.log(first);

	let [firstName = 'John', lastName = 'Dou'] = [];
	console.log(firstName);

	function getCount() {
		return 43;
	}

	let [who, count = getCount()] = ['me'];
	console.log(`Who: ${who}, Count: ${count}`);
}

function destructuringObject() {
	alert('Object');
	console.log('<<<<<   Object   >>>>>');

	let options = {
		title: 'Меню'
	};

	let { width:w = 100, height:h = 200, title } = options;

	console.log(`title: ${title}, w: ${w}, h: ${h}`);
}

function destructuringObjectSpread() {
	alert('Object Spread');
	console.log('<<<<<   Object Spread   >>>>>');

	let options = {
		title: 'Меню',
		width: 100,
		height: 200
	};

	let {title, ...size} = options;

	console.log(`size: ${JSON.stringify(size)}`);
}

function destructuringObjectAfterDeclaration() {
	alert('Object After Declaration');
	console.log('<<<<<   Object After Declaration   >>>>>');

	let a, b;
	({a, b} = { a: 5, b: 6 }); // braces are required

	console.log(`a: ${a}, b: ${b}`);
}

