const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Quantos anos você tem? ", (idade) => {
    console.log(`O usuário tem ${idade} anos!`)
    readline.close()
})

// o programa tem que estar seguindo essa estrutura
// o dado do input pode ser tratado normalmente
