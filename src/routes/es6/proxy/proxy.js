"use strict";

import templates from '../../../templates';
import proxyTemplate from './proxyTemplate.html';

module.exports = learnProxy;

function learnProxy() {
	templates.useContent(proxyTemplate);
  	alert('proxy');
};