/*global require, exports */

var elm = require('node-elm-compiler');

exports.translate = function (load) {
    'use strict';

    return elm.compileToString(load.source, {});
};
