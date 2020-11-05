const abort = require('./abort');
const keytar = require('keytar');
const { name } = require('../package.json');

const ACTIVE_KEY = 'current';

module.exports = async function active(account) {
    if(typeof account === 'undefined') {
        return await keytar.getPassword(name, ACTIVE_KEY);
    }

    if(!await keytar.getPassword(name, account)) {
        error(`No authenticated account matching ${account}`);
    }

    await keytar.setPassword(name, ACTIVE_KEY, account);
    
    return account;
};