"use strict";

import templates from '../../../templates';
import proxyTemplate from './proxyTemplate.html';

module.exports = learnProxy;

function learnProxy() {
	templates.useContent(proxyTemplate);
	alert('Learn proxy');
	proxySetGet();
	proxyHas();
	proxyDeleteProperty();
	proxyEnumerate();
	proxyApply();
	proxyConstruct();
};

function proxySetGet() {
	alert('Get/Set object');
	console.log('<<<<<<<<<<<<');

	let user = {};

	let proxy = new Proxy(user, {
		get(target, prop) {
			console.log(`Reading ${prop}`);
			return prop in target ? target[prop] : '!defined';
			// return target[prop];
		},
		set(target, prop, value) {
			console.log(`Writing ${prop} with ${value}`);
			target[prop] = value;
			return true;
		}
	});
	proxy.firstName = 'Ben';
	console.log(proxy.firstName);
	console.log(proxy.LastName);
}

function proxyHas() {
	alert('Has');
	console.log('<<<<<<<<<<<<');

	let dictionary = {
  		'Hello': 'Привет'
	};

	dictionary = new Proxy(dictionary, {
		has(target, phrase) {
			return true;
		}
	});

	console.log(`BlaBlaBla is not in dictionary but: ${'BlaBlaBla' in dictionary}`);
}

function proxyDeleteProperty() {
	alert('DeleteProperty');
	console.log('<<<<<<<<<<<<');

	let dictionary = {
		'Hello': 'Привет'
	};

	let proxy = new Proxy(dictionary, {
		deleteProperty(target, phrase) {
			return true;
		}
	});

	delete proxy['Hello'];

	console.log(`Hello not deleted: ${'Hello' in dictionary}`);
	console.log('Hello' in proxy);
}

function proxyEnumerate() {
	alert('Enumerate');
	console.log('<<<<<<<<<<<<');

	let obj = {
		a: 1,
		b: 1,
		_c: 1,
		_d: 1
	};

	let proxy = new Proxy(obj, {
		enumerate(target) {
			let props = Object.keys(target).filter(prop => prop[0] != '_');
			return props[Symbol.iterator]();
		}
	});

	console.log('enumerate is obsolete, so it may not work');

	for(let prop in proxy) {
		console.log(prop);
	}
}

function proxyApply() {
	alert('Apply');
	console.log('<<<<<<<<<<<<');

	function sum(a, b) {
		return a + b;
	}

	let proxy = new Proxy(sum, {
		apply: function(target, thisArg, argumentsList) {
			console.log(`I'm proxy, I will calculate summ of: ${argumentsList}`);
			return target.apply(thisArg, argumentsList);
		}
	});

	console.log(`Sum: ${proxy(1, 2)} `);
}

function proxyConstruct() {
	alert('Construct');
	console.log('<<<<<<<<<<<<');

	function User(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	let UserProxy = new Proxy(User, {
		construct: function(target, argumentsList) {
			console.log(`Creating new User with args: ${argumentsList}`);
			return new target(...argumentsList);
		}
	});

	let user = new UserProxy("John", "Doe");

	console.log(`New user's name: ${user.name} `);
}

