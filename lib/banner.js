const logo = require('./logo');
const program = require('commander');
const shouldDisplayBanner = require('./shouldDisplayBanner');

module.exports = () => {
    shouldDisplayBanner() && program.outputHelp(logo);
};