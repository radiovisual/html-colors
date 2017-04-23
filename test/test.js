import test from 'ava';
import colors from '../src/html-colors';
import fn from '../src';

test('all', t => {
	const all = fn.all();
	t.is(typeof all, 'object');
	t.is(all.black, '#000000');
	t.is(Object.keys(colors).length, Object.keys(all).length);
});

test('names', t => {
	const names = fn.names();
	t.true(Array.isArray(names));
	t.true(names.indexOf('black') > -1);
});

test('hex', t => {
	const black = fn.hex('black');
	t.is(black, '#000000');

	t.throws(() => {
		fn.hex();
	}, 'htmlColors.hex expected a string, got undefined');
});

test('random', t => {
	const random = fn.random();
	t.true(Object.keys(colors).indexOf(random) > -1);
});
