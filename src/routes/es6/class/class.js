'use strict';

import templates from '../../../templates';
import classTemplate from './class.html';

function learnClass() {
	templates.useContent(classTemplate);
  	alert('Learn class');

	// classBasics();
	// classMethods();
	// classStaticProperties();
	classInheritance();
};

module.exports = learnClass;

function classBasics() {
	alert('Basics');
	console.log('<<<<<   Basics   >>>>>');

	class User {

		constructor(name) {
			this.name = name;
		}

		sayHi() {
			console.log(this.name);
		}

	}

	let user = new User('John');
	user.sayHi();
}

function classMethods() {
	alert('Methods');
	console.log('<<<<<   Methods   >>>>>');

	class User {
		constructor(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}

		// getter
		get fullName() {
			return `${this.firstName} ${this.lastName}`;
		}

		// setter
		set fullName(newValue) {
			[this.firstName, this.lastName] = newValue.split(' ');
		}

		// calculated method name
		['test'.toUpperCase()]() {
			console.log('PASSED!');
		}

	};

	let user = new User('John', 'Doe');
	console.log( user.fullName );
	user.fullName = 'Lara Croft';
	console.log( user.fullName );
	user.TEST();
}

function classStaticProperties() {
	alert('Static Properties');
	console.log('<<<<<   Static Properties   >>>>>');

	class User {
		constructor(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}

		static createGuest() {
			return new User('Гость', 'Сайта');
		}
	};

	let user = User.createGuest();

	console.log( user.firstName );
	console.log( User.createGuest );
}

function classInheritance() {
	alert('Inheritance');
	console.log('<<<<<   Inheritance   >>>>>');

	class Animal {
		constructor(name) {
			this.name = name;
		}

		walk() {
			console.log('I walk: ' + this.name);
		}
	}

	class Rabbit extends Animal {
		walk() {
			super.walk();
			console.log('...and jump!');
		}
	}

	new Rabbit('Bunny').walk();

	class Dog extends Animal {
		constructor() {
			// console.log(this); - this is non defined before call super() in constructor
			super('Rex');
			console.log(this);
		}
	}

	new Dog().walk();

	console.log( Rabbit.prototype.__proto__ == Animal.prototype );
}


