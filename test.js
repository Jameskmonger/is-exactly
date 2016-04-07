'use strict';

const test = require('modunit');
const isExactly = require('./index');

test('it returns false when given undefined and a number', (t, number) => {
    t.assert.false(isExactly(undefined, number));
}, [
    [3], [4], [10], [20], [Infinity]
]);

test('it returns false when given undefined and a string', (t, string) => {
    t.assert.false(isExactly(undefined, string));
}, [
    ['james'], ['bob'], ['cats'], ['apples'], ['cheese and melon']
]);

test('it returns false when given null and a number', (t, number) => {
    t.assert.false(isExactly(null, number));
}, [
    [3], [4], [10], [20], [Infinity]
]);

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
]);

test('it returns false for objects with different keys, same count', (t, value, other) => {
    t.assert.false(isExactly(value, other));
}, [
    [ { a: 1, b: 2 }, { a: 1, c: 2 } ],
    [ { name: 'james', age: 15 }, { name: 'james', height: 170 } ],
    [ { fruit: 'apple', color: 'green' }, { fruit: 'grapefruit', size: 'large' } ]
]);

test('it returns false for objects with different key count', (t, value, other) => {
    t.assert.false(isExactly(value, other));
}, [
    [ { a: 1, b: 2 }, { a: 1 } ],
    [ { name: 'james', age: 15 }, { name: 'james' } ],
    [ { fruit: 'apple', color: 'green' }, { fruit: 'grapefruit' } ]
]);

test('it returns false for objects with same level 1, different level 2', (t, value, other) => {
    t.assert.false(isExactly(value, other));
}, [
     [
         {
             name: 'james',
             birthday: {
                 month: 9,
                 day: 17
             }
         },
         {
             name: 'james',
             birthday: {
                 month: 10,
                 day: 15
             }
         }
     ],
     [
         {
             car: {
                 make: 'Citroen',
                 model: 'Saxo'
             },
             color: 'red'
         },
         {
             car: {
                 make: 'Peugeot',
                 model: '106'
             },
             color: 'blue'
         }
     ]
]);

test('it returns true for objects with same level 1, same level 2', (t, value) => {
    t.assert.true(isExactly(value, value));
}, [
     [
         {
             name: 'james',
             birthday: {
                 month: 9,
                 day: 17
             }
         }
     ],
     [
         {
             car: {
                 make: 'Citroen',
                 model: 'Saxo'
             },
             color: 'red'
         }
     ]
]);

test('it returns false for objects with same level 1, same level 2, different level 3', (t, value, other) => {
    t.assert.false(isExactly(value, other));
}, [
     [
         {
             name: 'james',
             birthday: {
                 month: 9,
                 day: 17,
                 time: {
                     hours: 15,
                     minutes: 30
                 }
             }
         },
         {
             name: 'james',
             birthday: {
                 month: 9,
                 day: 17,
                 time: {
                     hours: 20,
                     minutes: 0
                 }
             }
         }
     ],
     [
         {
             car: {
                 make: 'Citroen',
                 model: 'Saxo',
                 engine: {
                     displacement: '1600'
                 }
             },
             color: 'red'
         },
         {
             car: {
                 make: 'Peugeot',
                 model: '106',
                 engine: {
                     displacement: '1400'
                 }
             },
             color: 'blue'
         }
     ]
]);

test('it returns true for objects with same level 1, same level 2, same level 3', (t, value) => {
    t.assert.true(isExactly(value, value));
}, [
    [
        {
            name: 'james',
            birthday: {
                month: 9,
                day: 17,
                time: {
                    hours: 15,
                    minutes: 30
                }
            }
        }
    ],
    [
        {
            car: {
                make: 'Citroen',
                model: 'Saxo',
                engine: {
                    displacement: '1600'
                }
            },
            color: 'red'
        }
    ]
]);
