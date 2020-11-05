const chalk = require('chalk');
const abort = require('./abort');

module.exports = function error(txt, code = 0) {
    abort(chalk.white.bgRed('ERROR: '+txt), code = 0);
};