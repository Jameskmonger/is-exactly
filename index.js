'use strict';

var keys = Object.keys || require('object-keys');

module.exports = function isExactly (value, other) {
    // If the value is exactly the other value with the === operator,
    // then we can just return true
    if (value === other) {
        return true;
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
};
