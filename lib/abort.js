module.exports = function abort(txt, code = 0) {
    console.log(txt);

    process.exit(code);
};