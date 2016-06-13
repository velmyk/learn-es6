'use strict';

import templates from '../../../templates';
import setMapTemplate from './set-map.html';

function learnSetMap() {
	templates.useContent(setMapTemplate);
  	alert('Learn Set / Map');

	mapBasics();
	mapObjectAsKey();
	mapIteration();
	setBasics();
	setIteration();
	setMapWeak();
};

module.exports = learnSetMap;

function mapBasics() {
	alert('Basics');
	console.log('<<<<<   Basics   >>>>>');

	let map = new Map();

	map.set('1', 'str1');
	map.set(1, 'num1');
	map.set(true, 'bool1');

	console.log( map.get(1) );
	console.log( map.get('1') );

	console.log( map.has(1) );

	console.log( map.delete(1) );
	console.log( map.get(1) );

	console.log( map.size );
	console.log( map );

	map
		.set('1', 'str2')
		.set(1, 'num2')
		.set(true, 'bool2');

	console.log( map );

	let anotherMap = new Map([
		['1',  'str1'],
		[1,    'num1'],
		[true, 'bool1']
	]);

	console.log( anotherMap );
	anotherMap.clear();
	console.log( anotherMap );

}

function mapObjectAsKey() {
	alert('Object As Key');
	console.log('<<<<<   Object As Key   >>>>>');

	let user = {
		name: 'John'
	};

	let visitsCountMap = new Map();

	visitsCountMap.set(user, 123);

	console.log( visitsCountMap.get(user) );
}

function mapIteration() {
	alert('Map Iteration');
	console.log('<<<<<   Map Iteration   >>>>>');

	let recipeMap = new Map([
		['meat', '500 g'],
		['tomato', '350 g'],
		['milk',   '50 g']
	]);

	for(let fruit of recipeMap.keys()) {
		console.log(fruit);
	}

	for(let amount of recipeMap.values()) {
		console.log(amount);
	}

	for(let entry of recipeMap) {
		console.log(entry);
	}

	recipeMap.forEach( (value, key, map) => {
		console.log(`${key}: ${value}`);
	});
}

function setBasics() {
	alert('Set Basics');
	console.log('<<<<<   Set Basics   >>>>>');

	let set = new Set();

	let john = {name: 'John'};
	let mike = {name: 'Mike'};
	let bob = {name: 'Bob'};

	set.add(john);
	set.add(mike);
	set.add(bob);
	set.add(john);
	set.add(mike);

	console.log( set.size );

	set.forEach( user => console.log(user.name ) );

	console.log(set.has(bob));
	set.delete(bob);
	console.log(set.has(bob));

	console.log(set);
	set.clear();
	console.log(set);
}

function setIteration() {
	alert('Set Iteration');
	console.log('<<<<<   Set Iteration   >>>>>');

	let john = {name: 'John'};
	let mike = {name: 'Mike'};
	let bob = {name: 'Bob'};

	let users = new Set([john, mike, bob]);

	for(let entry of users) {
		console.log(entry);
	}

	console.log('<<');

	users.forEach( (value, valueAgain, users) => {
		console.log(value);
	});

	console.log(users);
}

function setMapWeak() {
	alert('Weak Set / Map');
	console.log('<<<<<   Weak Set / Map   >>>>>');

	let activeUsers = [
		{name: 'John'},
		{name: 'Mike'},
		{name: 'Bob'}
	];

	let weakMap = new WeakMap();

	weakMap[activeUsers[0]] = 1;
	weakMap[activeUsers[1]] = 2;
	weakMap[activeUsers[2]] = 3;
	weakMap.set(activeUsers[0], 56);
	console.log(weakMap);
	activeUsers.splice(0, 1);

}