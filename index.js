'use strict';

var keys = Object.keys || require('object-keys');

module.exports = function isExactly (value, other) {
    // If the value is exactly the other value with the === operator,
    // then we can just return true
    if (value === other) {
        return true;
    }

    // If they're not both objects, we can't go any deeper, so just use the
    // === operator
    if (typeof value !== 'object' && typeof other !== 'object') {
        return value === other;
    }

    // Get the keys from the two objects
    var vKeys = keys(value);
    var oKeys = keys(other);

    // If the objects have a different amount of keys, they're not the same
    if (vKeys.length !== oKeys.length) {
        return false;
    }

    // Sort the two key lists so we can compare the keys before comparing their values
    vKeys.sort();
    oKeys.sort();

    for (var i = 0; i < vKeys.length; i++) {
        // If the key at this index isn't the same as the other key at this index, they're not the same object
        if (vKeys[i] !== oKeys[i]) {
            return false;
        }
    }

    for (var i = 0; i < vKeys.length; i++) {
        // We can get the key from the either list as we know at this point that they are the same
        var key = vKeys[i];

        // Do a deep check on the next level
        if (isExactly(value[key], other[key]) === false) {
            return false;
        }
    }

    return true;
};
