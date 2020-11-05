const program = require('commander');
const { args, unknown } = program.parseOptions(process.argv.slice(2));

module.exports = () => {
    return !args.length ||
        unknown.indexOf(program._helpLongFlag) > -1 ||
        unknown.indexOf(program._helpShortFlag) > -1;
};