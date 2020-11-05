const chalk = require('chalk');
const program = require('commander');
const abort = require('../lib/abort');
const users = require('../lib/users');
const logout = require('../lib/logout');

module.exports = program
    .command('logout [email]')
    .description('Logout one or more users from the Capsule CLI.')
    .action(async function(email) {
        if(!email) {
            (await users()).forEach(({ account }) => {
                logout(account);
            });
        }
        else {
            logout(email);
        }

        abort(chalk.green(`${email} was successfully logged out!`));
    });