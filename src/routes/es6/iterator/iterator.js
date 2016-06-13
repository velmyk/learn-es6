'use strict';

import templates from '../../../templates';
import iteratorTemplate from './iterator.html';

function learnIterator() {
	templates.useContent(iteratorTemplate);
  	alert('Learn iterator');

	iteratorCustom();
	iteratorBuiltIn();
};

module.exports = learnIterator;

function iteratorCustom() {
	alert('Custom');
	console.log('<<<<<   Custom   >>>>>');

	let range = {
		from: 1,
		to: 5
	};

	range[Symbol.iterator] = function() {

		let current = this.from;
		let last = this.to;

		return {
			next() {
				if (current <= last) {
					return {
						done: false,
						value: current++
					};
				} else {
					return {
						done: true
					};
				}
			}

		}
	};

	for (let num of range) {
		console.log(num);
	}

	console.log(`Max of range: ${Math.max(...range)}`);
}

function iteratorBuiltIn() {
	alert('Built In');
	console.log('<<<<<   Built In   >>>>>');

	let arr = [1, 2, 3];
	console.log('<< iteration throught array');
	for (let value of arr) {
		console.log(value);
	}

	console.log('<< iteration throught string');
	for (let char of "Hello") {
		console.log(char);
	}

	// as example of manual using iterators
	console.log('<< manual usage of iterators');
	let str = "Hello";
	let iterator = str[Symbol.iterator]();

	while(true) {
		let result = iterator.next();
		if (result.done) break;
		console.log(result.value);
	}
}

