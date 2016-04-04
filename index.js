'use strict';

var keys = Object.keys || require('object-keys');

module.exports = function isExactly (value, other) {
    if (value === other) {
        return true;
    }

    var vKeys = keys(value);
    var oKeys = keys(other);

    if (vKeys.length !== oKeys.length) {
        return false;
    }

    vKeys.sort();
    oKeys.sort();

    for (var i = 0; i < vKeys.length; i++) {
        if (vKeys[i] !== oKeys[i]) {
            return false;
        }
    }
};
