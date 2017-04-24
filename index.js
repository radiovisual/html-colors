'use strict';
const uniqueRandomArray = require('unique-random-array');
const htmlColors = require('./html-colors');

function names() {
	return Object.keys(htmlColors);
}

function hex(name) {
	if (typeof name !== 'string') {
		throw new TypeError('htmlColors.hex expected a string, got ' + typeof name);
	}
	return htmlColors[name];
}

function all() {
	return htmlColors;
}

function random() {
	const keys = Object.keys(htmlColors);
	const randomColor = uniqueRandomArray(keys);
	return randomColor();
}

module.exports = {
	names: names,
	hex: hex,
	all: all,
	random: random
};
