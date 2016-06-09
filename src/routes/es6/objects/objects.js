'use strict';

import templates from '../../../templates';
import objectsTemplate from './objects.html';

function learnObjects() {
	templates.useContent(objectsTemplate);
  	alert('Learn objects');

	objectsShortNames();
	objectsCalculatedProperties();
	objectsPrototype();
	objectsNewMethods();
	objectsOwnMethods();
	objectsSuper();
};

module.exports = learnObjects;

function objectsShortNames() {
	alert('Short names');
	console.log('<<<<<   Short names   >>>>>');
	
	let name = 'John';
	let isAdmin = true;

	let user = {
		name,
		isAdmin
	};

	console.log( JSON.stringify(user) );
}

function objectsCalculatedProperties() {
	alert('Calculated props');
	console.log('<<<<<   Calculated props   >>>>>');
	
	let a = 'Very ';
	let b = 'famous ';
	let c = 'person';

	let user = {
	  [(a + b + c).toLowerCase()]: 'John'
	};

	console.log( user['very famous person'] );
}

function objectsPrototype() {
	alert('Prototype');
	console.log('<<<<<   Prototype   >>>>>');
	
	const a = {
		a: 1
	};

	const b = {
		b: 1
	};

	console.log(Object.getPrototypeOf(a));
	Object.setPrototypeOf(a, b);
	// a._proto_ = b; does not work
	// a.prototype = b; works
	console.log(Object.getPrototypeOf(a));
}

function objectsNewMethods() {
	alert('New methods');
	console.log('<<<<<   New methods   >>>>>');

	// Object.assign()

	let user = { name: 'John' };
	let visitor = { isAdmin: false, visits: true };
	let admin = { isAdmin: true };

	Object.assign(user, visitor, admin);

	console.log( JSON.stringify(user) );

	// Object.is()

	console.log( Object.is(+0, -0));
	console.log( +0 === -0 );

	console.log( Object.is(NaN, NaN) );
	console.log( NaN === NaN );
}

function objectsOwnMethods() {
	alert('Own methods');
	console.log('<<<<<   Own methods   >>>>>');

	let name = 'John', surname = 'Dou';
	let methodName = 'getAge';

	let user = {
		name,
		surname,
		sayHi() {
			console.log(this.name);
		},
		get fullName() {
			return `${name} ${surname}`;
		},
		[methodName]() {
			return 13;
		}
	};
}

function objectsSuper() {
	alert('Super');
	console.log('<<<<<   Super   >>>>>');

	let animal = {
		walk() {
			console.log(`I'm walking`);
		}
	};

	let rabbit = {
		__proto__: animal,
		walk() {
			console.log(super.walk);
			super.walk();
		},
		/* walk: function() {  // super only works in object's methods, not in property - function
		 * 		super.walk();  // will not work
		 * }
		 */
		walking() {
			setTimeout(() => super.walk()); // arrow functions take outside super
		}
		/* walking() {
		 *	setTimeout(function() { super.walk() } ); // will not work
		 * }
		 */
	};

	rabbit.walk();
}