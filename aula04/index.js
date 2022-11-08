// passando argumentos pelo node

console.log(process.argv);
const args = process.argv.slice(2);

console.log(args);
const nome = args[0].split('=')[1];
console.log(nome)

const idade = args[1].split('=')[1];
console.log(idade)


console.log(`Seu nome é ${nome} e você tem ${idade} anos!`)

//node .\index.js nome=Mateus idade=20

// Aula sobre ler argumentos passados diretamente pelo node, sem utilizar um modulo externo

