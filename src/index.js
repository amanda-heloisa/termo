const readline = require('readline');

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const palavraDoDia = 'amigo'

function verificarPalavra(palavraDigitada) {
    const resultado = []
    for(const i in palavraDigitada) {
        const letraPalavraDigitada = palavraDigitada[i]
        if(palavraDigitada[i] === palavraDoDia[i]){
            resultado.push('\x1b[36m' + letraPalavraDigitada + '\x1b[0m')
        } else if(palavraDoDia.includes(letraPalavraDigitada)) {
            resultado.push('\x1b[33m' + letraPalavraDigitada + '\x1b[0m')
        } else {
            resultado.push('\x1b[31m' + letraPalavraDigitada + '\x1b[0m')
        }
     }
     console.log(...resultado.slice(0, 5))
}

leitor.question('Digite a palavra: ', (palavraDigitada) => {
    verificarPalavra(palavraDigitada)
    leitor.close()
})