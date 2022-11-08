const x = 10;
const y = 'Mateus';
const z = [1, 2];

// console normal
console.log(x, y, z);

// usados em um loop (faz a contagem de impressões)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variável entre string
console.log("Seu nome é %s, e você está estudando NodeJS", y)
// o %s indica que o valor que entrará ai será o dado passado logo após, nesse caso a variável y
console.log("Seu nome é %s, e você está estudando %s", "Jonas", "programação")
// também pode ser passado assim dessa forma

// limpar o console
setTimeout(() => {
    console.clear()
}, 2000);
// depois de 2 segundos o terminal será limpo