const getNotes = require('./notes');
const chalk = require('chalk');
const log = console.log;

const msg = getNotes()
console.log(msg)

log(chalk.green.bold.underline('Success'));


