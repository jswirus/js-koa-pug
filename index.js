const pug = require('pug');
const path = require('path');
const defaults = require('lodash.defaults');

module.exports = function(base, config) {
    return function(ctx, next) {
        ctx.render = function(file, options) {
            ctx.body = pug.renderFile(path.resolve(base, file + '.pug'), defaults({}, options, config));
        };
        return next();
    };
};
