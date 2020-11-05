const { table } = require('table');
const active = require('../lib/active');
const program = require('commander');
const users = require('../lib/users');
const error = require('../lib/error');

module.exports = program
    .command('authenticated')
    .description('Get a list of the authenticated accounts.')
    .action(async function() {
        const current = await active();

        const data = (await users()).map(({ account }, i) => {
            return [account, account === current ? '✓' : null];
        });

        if(data.length) {
            return console.log(table([['Email', 'Active']].concat(data)));
        }

        error('No authenticated users.');
    });