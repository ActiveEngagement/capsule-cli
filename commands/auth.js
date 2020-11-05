const chalk = require('chalk');
const inquirer = require('inquirer');
const program = require('commander');
const authenticate = require('../lib/authenticate');

module.exports = program
    .command('login <email>')
    .description('Authenticate a Capsule account.')
    .option('-p, --password', 'The account password')
    .action(async function(email) {
        const { password } = await inquirer.prompt([{
            name: 'password',
            type: 'password',
            message: 'Password'
        }]);

        const user = await authenticate(email, password);

        console.log(chalk.green('You have been authenticated!'));
    });