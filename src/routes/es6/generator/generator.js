"use strict";

import templates from '../../../templates';
import generatorTemplate from './generatorTemplate.html';

module.exports = learnProxy;

function learnProxy() {
	templates.useContent(generatorTemplate);
  	alert('generator');
};