const chalk = require('chalk')

module.exports = class ResponseError extends Error {
    constructor(response) {
        super([
            chalk.white.bgRed(`${response.status} HTTP Error`),
            '',
        ].concat(Object.keys(response.data.errors).map(key => {
            return [
                chalk.bold(key),
            ].concat(response.data.errors[key].map(error => `- ${error}`)).join('\n') + '\n';
        })).join('\n'));
    }
}