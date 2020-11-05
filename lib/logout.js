const keytar = require('keytar');
const { name } = require('../package.json');

module.exports = async function logout(account) {
    return await keytar.deletePassword(name, account);
};
