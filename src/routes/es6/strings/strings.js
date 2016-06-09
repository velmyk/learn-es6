'use strict';

import templates from '../../../templates';
import stringsTemplate from './strings.html';

function learnStrings() {
	templates.useContent(stringsTemplate);
  	alert('Learn strings');

	stringsBasics();
	stringsCustomInterpolationFunction();
	stringsUnicode();
	stringsNewMethods();
};

module.exports = learnStrings;

function stringsBasics() {
	alert('Basics');
	console.log('<<<<<   Basics   >>>>>');

	console.log(
		`string
		with
		new
		lines`);	
}

function stringsCustomInterpolationFunction() {
	alert('Custom Interpolation Function');
	console.log('<<<<<   Custom Interpolation Function   >>>>>');

	function f(strings, ...values) {
		console.log(JSON.stringify(strings));
		console.log(JSON.stringify(strings.raw));
		console.log(JSON.stringify(values));
	}

	let apples = 3;
	let oranges = 5;

	let str = f`Sum of ${apples} + ${oranges} =\n ${apples + oranges}!`;
}

function stringsUnicode() {
	alert('Unicode');
	console.log('<<<<<   Unicode   >>>>>');

	// new methods String.fromCodePoint and str.codePointAt - better work with surogat pairs
	console.log( '𝒳'.codePointAt(0) );
	console.log( '𝒳'.charCodeAt(0), ' old method works not correct' );

	console.log( String.fromCodePoint(119987) ); // 𝒳
	console.log( String.fromCharCode(119987), ' old method works not correct' ); // 

	// unicode normalization
	console.log( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() );
}

function stringsNewMethods() {
	alert('New Methods');
	console.log('<<<<<   New Methods   >>>>>');

	let str = 'some string',
		s = ' st',
		end = 'ing',
		start = 'so';

	console.log( str.includes(s) );
	console.log( str.endsWith(end) );
	console.log( str.startsWith(start) );
	console.log( str.repeat(3) );

	
}

