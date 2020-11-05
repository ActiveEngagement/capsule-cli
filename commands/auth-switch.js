const chalk = require('chalk');
const program = require('commander');
const error = require('../lib/error');
const active = require('../lib/active');

module.exports = program
    .command('switch <email>')
    .description('Change to another authenticated Capsule account.')
    .action(async function(email) {
        const current = await active();

        if(email === current) {
            error(`${current} is already active`);
        }

        await active(email);

        console.log(chalk.green('You successfully switched accounts!'));
    });