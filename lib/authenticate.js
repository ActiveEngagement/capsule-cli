const Axios = require('axios');
const keytar = require('keytar');
const active = require('./active');
const { name } = require('../package.json');

module.exports = async function authenticate(email, password) {
    const { data } = await Axios.post('auth/user', (
        typeof email === 'object' ? email : {
            email: email,
            password: password
        })
    );

    await keytar.setPassword(name, email, data.secret_key);

    await active(email);

    return data;
};
