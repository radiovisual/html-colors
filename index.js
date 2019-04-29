'use strict';
const uniqueRandomArray = require('unique-random-array');
const htmlColors = require('./html-colors.json');

function names() {
	return Object.keys(htmlColors);
}

function hex(name) {
	if (typeof name !== 'string') {
		throw new TypeError('htmlColors.hex expected a string, got ' + typeof name);
	}
	return htmlColors[name.toLowerCase()];
}

function rgb(name) {
	if (typeof name !== 'string') {
		throw new TypeError('htmlColors.hex expected a string, got ' + typeof name);
	}
	const hex = htmlColors[name.toLowerCase()];
	const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return {r: parseInt(rgb[1], 16),
		g: parseInt(rgb[2], 16),
		b: parseInt(rgb[3], 16)}
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
	rgb: rgb,
	all: all,
	random: random
};
