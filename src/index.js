const palavraDoDia = 'amigo'
const palavraDigitada = 'raios'

const resultado = []

for(const letraPalavraDoDia of palavraDoDia) {
   for(const letraPalavraDigitada of palavraDigitada){
        if(letraPalavraDigitada === letraPalavraDoDia){
            resultado.push('\x1b[36m' + letraPalavraDigitada + '\x1b[0m')
        } else if(palavraDoDia.includes(letraPalavraDigitada)) {
            resultado.push('\x1b[33m' + letraPalavraDigitada + '\x1b[0m')
        } else {
            resultado.push('\x1b[31m' + letraPalavraDigitada + '\x1b[0m')
        }
    }
}

console.log(...resultado.slice(0, 5))