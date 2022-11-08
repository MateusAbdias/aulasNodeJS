//  estilizar a saida do console
// https://www.npmjs.com/package/chalk
// podemos concatenar os próprios métodos que o módulo possui

import chalk from 'chalk';

console.log(chalk.red('Esta cor é: Vermelho'));
console.log(chalk.green('Esta cor é: Verde'));
console.log(chalk.blue('Esta cor é: Azul'));
console.log(chalk.white('Esta cor é: Branca'));
console.log(chalk.black('Esta cor é: Preta'));
console.log(chalk.yellow('Esta cor é: Amarela'));


console.log(chalk.bgYellow('Este background é amarelo'));
console.log(chalk.bgYellow.blue('Este background é amarelo com a letra azul'));
console.log(chalk.bgYellow.blue.bold('Este background é amarelo com a letra azul em negrito'));