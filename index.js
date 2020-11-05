const Axios = require('axios');
const logo = require('./lib/logo');
const user = require('./lib/user');
const abort = require('./lib/abort');
const banner = require('./lib/banner');
const { version } = require('./package.json');
const ResponseError = require('./errors/ResponseError');


Axios.defaults.baseURL = process.env.NODE_ENV === 'development' ?
    'http://api.thecapsule.test/v1' :
    'https://api.thecapsule.email/v1';

Axios.defaults.headers = {
    'Accept': 'application/json',
    'Capsule-Client-Platform': 'node',
    'Capsule-Client-Version': version,
    'Capsule-Client-Id': 'capsule-cli',
};

Axios.interceptors.response.use(response => response, error => {
    if(error.response.status === 422) {
        abort('\n' + new ResponseError(error.response).message);
    }

    throw error;
});

const program = require('commander')
    .name('capsule')
    .usage('<command>')
    .version(version)
    .on('command:*', command => {
        program.outputHelp(logo);
        program.help();
    });

require('./commands');

module.exports = async function() {
    const authenticated = await user();

    if(authenticated) {
        Object.assign(Axios.defaults.headers, {
            Authorization: `Bearer ${authenticated.password}`
        });
    }

    banner();
    
    program.parse(process.argv);

    // If no args, show the help
    if(program.args.length === 0) {
        program.help();
    }
};