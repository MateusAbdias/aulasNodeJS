const minimist = require('minimist');

const soma = require('./soma').soma;

const args = minimist(process.argv.slice(2));

const a = Number(args['a']);
const b = Number(args['b']);

soma(a, b);

// node .\index.js --a=10 --b=2

// Nessa aula peguei um modulo externo (minimist) e interno e peguei agrs e realizei uma soma
// a soma veio deu um outro módulo