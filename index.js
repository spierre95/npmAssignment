var chalk = require("chalk");

// var message = "Hello " + chalk.yellow("World");
// console.log(message);

// console.log(chalk.blue.bgRed.bold('Hello world!'))

var lighthouse = chalk.bgBlack(chalk.yellowBright("Light") + chalk.white('House') + chalk.blueBright('Labs'));

console.log(lighthouse)

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));