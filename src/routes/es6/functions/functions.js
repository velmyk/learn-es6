'use strict';

import templates from '../../../templates';
import functions from './functions.html';

function learnFunctions() {
	templates.useContent(functions);
  	alert('Learn functions');

	// functionsDefaultValues();
	// functionsSpread();
	// functionsSpreadOnFunctionCall();
	// functionsDestructuringParameters();
	// functionsName();
	functionsArrow();
};

module.exports = learnFunctions;

function functionsDefaultValues() {
	alert('Default Values');
	console.log('<<<<<   Default Values   >>>>>');

	function getHeight() {
		return 20;
	}

	function showMenu(title = "Default title", width = 100, height = getHeight() * 10) {
		console.log(`title = ${title}, width = ${width}, height = ${height}`);
	}

	showMenu(undefined, null);
}

function functionsSpread() {
	alert('Spread');
	console.log('<<<<<   Spread   >>>>>');

	function showName(firstName, lastName, ...rest) {
		console.log(firstName + ' ' + lastName + ' - ' + rest);
	}

	showName('John','Dou', 'Very', 'Famous', 'Person');
}

function functionsSpreadOnFunctionCall() {
	alert('Spread on Function Call');
	console.log('<<<<<   Spread on Function Call   >>>>>');

	let numbers = [2, 3, 15];

	let max = Math.max(...numbers);

	console.log( max );
}

function functionsDestructuringParameters() {
	alert('Destructuring Parameters');
	console.log('<<<<<   Destructuring Parameters   >>>>>');

	let options = {
		title: "Menu"
	};

	function showMenu({title="Title", width:w=100, height:h=200} = {}) {
		console.log(title + ' ' + w + ' ' + h);
	}

	showMenu();
	showMenu({});
	showMenu(options);
}

function functionsName() {
	alert('Name');
	console.log('<<<<<   Name   >>>>>');

	function f() {};
	console.log(f.name);

	let g = function g() {};
	console.log(g.name);

	let k = () => {};
	console.log(k.name);

	let user = {
		sayHi: () => { }
	}
	console.log(user.sayHi.name);
}

function functionsArrow() {
	alert('Arrow');
	console.log('<<<<<   Arrow   >>>>>');

	// no this and arguments in arrow function
	function defer(f, ms) {
		return function() {
			setTimeout(() => f.apply(this, arguments), ms)
		}
	}

	function sayHi(who) {
		console.log('Hi, ' + who);
	}

	let sayHiDeferred = defer(sayHi, 2000);
	sayHiDeferred("John");
}



