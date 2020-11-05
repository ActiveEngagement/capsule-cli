const keytar = require('keytar');
const active = require('./active');
const { name } = require('../package.json');

module.exports = async function user() {
    const email = await active();

    return email && {
        email, password: await keytar.getPassword(name, email)
    };
};