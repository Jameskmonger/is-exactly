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

test('it returns true when given the same string but concatenated', (t, value, other) => {
    t.assert.true(isExactly(value, other));
}, [
    ['james', ('j' + 'a' + 'mes')],
    ['bob', ('b' + 'o' + 'b')],
    ['cats', ('c' + 'at' + 's')],
    ['apples', ('a' + 'pp' + 'le' + 's')],
    ['cheese and melon', 'cheese ' + 'and' + ' melon']
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

test('it returns false when given the same number but stringified', (t, value, other) => {
    t.assert.false(isExactly(value, other));
}, [
    [3, '3'],
    [4, '4'],
    [10, '10'],
    [20, '20'],
    [Infinity, 'Infinity']
]);

test('it returns true when given the same object twice', (t, value) => {
    t.assert.true(isExactly(value, value));
}, [
    [{ a : [ 2, 3 ], b : [ 4 ] }],
    [{ name: 'James', country: 'UK' }],
    [{ name: 'apple', flavour: 'fruity' }],
    [{ species: 'cat', texture: 'furry' }]
])
