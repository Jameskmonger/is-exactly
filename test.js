'use strict';

const test = require('modunit');
const isExactly = require('./index');

test('it returns true when given the same number twice', (t, value) => {
    t.assert.true(isExactly(value, value));
}, [
    [3], [4], [10], [20], [Infinity]
]);

test('it returns true when given the same string twice', (t, value) => {
    t.assert.true(isExactly(value, value));
}, [
    ['james'], ['bob'], ['cats'], ['apples'], ['cheese and melon']
]);

test('it returns true when given the same boolean twice', (t, value) => {
    t.assert.true(isExactly(value, value));
}, [
    [true], [false]
]);

test('it returns true when given null twice', t => {
    t.assert.true(isExactly(null, null));
});

test('it returns true when given undefined twice', t => {
    t.assert.true(isExactly(undefined, undefined));
});
