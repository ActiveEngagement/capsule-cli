const keytar = require('keytar');
const { name } = require('../package.json');

module.exports = async function users() {
    return (await keytar.findCredentials(name)).filter(user => !!user.account.match(/@/));
};