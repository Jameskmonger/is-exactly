# is-exactly

Test for exact equality of two objects.

## Usage

```javascript
const isExactly = require('is-exactly');

isExactly(3, 3); // true

isExactly({ name: 'james' }, { name: 'james' }); // true

isExactly({
    name: 'James',
    age: 19,
    country: {
        name: 'United Kingdom',
        climate: 'cold'
    }
}, {
    name: 'James',
    age: 19,
    country: {
        name: 'Spain',
        climate: 'warm'
    }
}); // false
```

## License

[MIT](LICENSE)
