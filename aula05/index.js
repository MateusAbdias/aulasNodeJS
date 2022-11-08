const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
console.log(args);

const nome = args['nome'];
const profissao = args['profissao']
console.log(nome, profissao)

// os argumentos aqui são passados com -- 
// node .\index.js --nome=Mateus --profissao=Estudante 

// Aula sobre ler argumentos passados diretamente pelo node, mas utilizando um modulo externo
// Antes de qualquer coisa:
// primeiro use o comendo npm init para criar o package.json
// o package.json tem todas as dependencias que são utilizadas no projeto!
// depois instale os módulos q serão utilizados, e ao instala-los o node atualiza automaticamente o package.json
