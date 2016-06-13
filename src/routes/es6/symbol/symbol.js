'use strict';

import templates from '../../../templates';
import symbolTemplate from './symbol.html';

function learnSymbol() {
	templates.useContent(symbolTemplate);
  	alert('Learn symbol');

	symbolBasics();
	symbolGlobal();
	symbolUsage();
};

module.exports = learnSymbol;

function symbolBasics() {
	alert('Basics');
	console.log('<<<<<   Basics   >>>>>');
	
	let sym = Symbol();
	console.log( typeof sym );
	console.log(sym);

	let symb = Symbol('mySymbol');
	console.log(symb);
	console.log(symb.toString());

	console.log(`Symbols with same names are not equal: ${Symbol('name') == Symbol('name')}`);
}

function symbolGlobal() {
	alert('Global');
	console.log('<<<<<   Global   >>>>>');

	console.log(`Global symbols with same name are equal: ${Symbol.for('name') == Symbol.for('name')}`);

	let globSym = Symbol.for('myGlobSymb');
	console.log(Symbol.keyFor(globSym));
	console.log(`KeyFor works only for global symbols: ${Symbol.keyFor(Symbol('notGlobalSymbol'))}`);
}

function symbolUsage() {
	alert('Usage');
	console.log('<<<<<   Usage   >>>>>');

	let sex = Symbol();

	let user = {
		name: 'John',
		age: 30,
		[sex]: 'male',
		sex: 'female',
		isAdmin: false,
		[Symbol.for('isAdmin')]: true
	};

	console.log( Object.keys(user) );

	console.log( user[Symbol.for('isAdmin')] );
	console.log( user['isAdmin'] );

	console.log(user.sex);
	console.log(user['sex']);
	console.log(user[sex]);

	console.log( Object.getOwnPropertySymbols(user) );
	console.log( Object.getOwnPropertyNames(user) );
}

