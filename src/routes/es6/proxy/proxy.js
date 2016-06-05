"use strict";

const
	templates = require('../../../templates'),
	proxyTemplate = require('./proxyTemplate');

module.exports = function() {
	console.log(templates);
	templates.useContent(proxyTemplate);
  	alert("proxy");
};