'use strict';

import templates from '../../../templates';
import promiseTemplate from './promise.html';

function learnPromise() {
	templates.useContent(promiseTemplate);
  	alert('Learn promise');

	// promiseBasics();
	// promisePromisification();
	// promiseChaining();
	// promiseDetails();
	// promiseParalelExecuting();
	promiseUtilities();
};

module.exports = learnPromise;

function promiseBasics() {
	alert('Basics');
	console.log('<<<<<   Basics   >>>>>');

	let promise = new Promise((resolve, reject) => {

		setTimeout(() => resolve("result"), 1000);
		setTimeout(() => reject(new Error("ignored")), 2000); // will not be called

	});

	promise
		.then(
			result => console.log('Fulfilled: ' + result),
			error => console.log('Rejected: ' + error)
		);
}

function _httpGet(url) {

	return new Promise(function(resolve, reject) {

		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.onload = function() {
			if (this.status == 200) {
				setTimeout(() => resolve(this.response));
			} else {
				let error = new Error(this.statusText);
				error.code = this.status;
				setTimeout(() => reject(error), 2000);
			}
		};

		xhr.onerror = function() {
			setTimeout(() => reject(new Error("Network Error")), 2000);
		};

		xhr.send();
	});

}

function promisePromisification() {
	alert('Promisification');
	console.log('<<<<<   Promisification   >>>>>');

	_httpGet('https://api.github.com/users/velmyk')
		.then(
			response => console.log(`Fulfilled: ${response}`),
			error => console.log(`Rejected: ${error}`)
		);
}

function promiseChaining() {
	alert('Cahining');
	console.log('<<<<<   Cahining   >>>>>');

	_httpGet('/user.json')
		.then(response => {
			console.log(response);
			let user = JSON.parse(response);
			return user;
		})
		.then(user => {
			console.log(user);
			return _httpGet(`https://api.github.com/users/${user.name}`);
		})
		.then(githubUser => {
			console.log(githubUser);
			githubUser = JSON.parse(githubUser);

			let img = new Image();
			img.src = githubUser.avatar_url;
			img.className = 'promise__github-avatar';
			document.getElementsByClassName('content')[0].appendChild(img);

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					img.remove();
					reject();
				}, 3000);
			});
		})
		.catch(() => new Promise((resolve, reject) => reject('last')))
		.catch(error => {
			console.log(`Rejected: ${error}`);
			return new Promise((resolve, reject) => 3);
		})
		.then(response => console.log(`Fulfiled: ${response}`));
}

function promiseDetails() {
	alert('Details');
	console.log('<<<<<   Details   >>>>>');

	let promise = new Promise((resolve, reject) => resolve(3));

	promise
		.then(result => {
			console.log(`first: ${result}`);
			return new Promise((resolve, reject) => resolve(4));
		});

	promise
		.then(result => {
			console.log(`second: ${result}`);
			return 5;
		});
		
}

function promiseParalelExecuting() {
	alert('Paralel Executing');
	console.log('<<<<<   Paralel Executing   >>>>>');

	let urls = [
		'/user.json',
		'https://api.github.com/users/velmyk'
	];

	Promise.all( urls.map(_httpGet) )
		.then(results => console.log('all', results))
		.catch(err => console.log(err));

	Promise.race( urls.map(_httpGet) )
		.then(results => console.log('race', results))
		.catch(err => console.log(err));
}

function promiseUtilities() {
	alert('Utilities');
	console.log('<<<<<   Utilities   >>>>>');

	Promise.resolve(window.location)
		.then(_httpGet)
		.then(res => console.log(res));
}







