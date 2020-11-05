const figlet = require('figlet');

module.exports = () => {
    return [
        '\n', 
        figlet.textSync('Capsule', {
            font: 'Star Wars'
        }),
        '\n'
    ].join('');
};