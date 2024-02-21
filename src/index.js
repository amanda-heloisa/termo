const leitor = require('readline').createInterface({input: process.stdin, output: process.stdout});

const dicionario = [
    'sagaz', 'negro', 'termo', 'mexer',
    'nobre', 'senso', 'afeto', 'algoz', 
    'plena', 'fazer', 'assim', 'vigor', 
    'fosse', 'sanar', 'poder', 'audaz', 
    'ideia', 'cerne', 'sobre', 'inato', 
    'moral', 'desde', 'muito', 'justo', 
    'honra', 'torpe', 'sonho', 'etnia', 
    'amigo', 'anexo', 'lapso', 'haver', 
    'expor', 'dengo', 'tempo', 'casal', 
    'ardil', 'saber', 'pesar', 'causa',
    'dizer', 'genro', 'dever', 'posse', 
    'coser', 'brado', 'sendo', 'prole', 
    'crivo', 'comum', 'corja', 'temor',
    'ainda', 'estar', 'ceder', 'pauta',
    'digno', 'culto', 'fugaz', 'atroz', 
    'mundo', 'censo', 'forte', 'vulgo', 
    'valha', 'denso', 'criar', 'pudor', 
    'dogma', 'mesmo', 'regra', 'jeito',
    'louco', 'ordem', 'todos', 'impor', 
    'banal', 'pedir', 'homem', 'feliz', 
    'coisa', 'limbo', 'servo', 'desse',
    'forma', 'prosa', 'presa', 'falar',
    'ontem', 'viril', 'cunho', 'posso', 
    'certo', 'manso', 'vendo', 'meiga',
    'valor', 'fluir', 'acaso', 'raios',
    'visar', 'afago', 'puder', 'falso',
    'legal', 'lugar', 'temer', 'abrir',
    'afins', 'cisma', 'linda', 'obter',
    'gerar', 'pleno', 'bruma', 'praxe',
    'ajuda', 'matiz', 'burro', 'crise',
    'fluxo', 'senil', 'havia', 'enfim',
    'ritmo', 'tomar', 'morte', 'olhar',
    'brega', 'levar', 'favor', 'bravo',
    'vital', 'reter', 'valia', 'vivaz',
    'falta', 'grato', 'tecer', 'laico',
    'ameno', 'ouvir', 'possa', 'calma',
    'carma', 'viver', 'outro', 'nicho',
    'passo', 'achar', 'tendo', 'noite',
    'pobre', 'fator', 'rogar', 'selar',
    'fardo', 'farsa', 'terra', 'ativo',
    'coeso', 'rever', 'citar', 'sinto',
    'sonso', 'leigo', 'adiar', 'haste',
    'gente', 'claro', 'humor', 'cesta',
    'deter', 'velho', 'sulco', 'atuar',
    'exato', 'papel', 'amplo', 'vemos',
    'ideal', 'feixe', 'igual', 'marco',
    'ponto', 'fonte', 'imune', 'terno',
    'gesto', 'ficar', 'hiato', 'cauda',
    'vazio', 'ambos', 'capaz', 'nossa',
    'tanto', 'apoio', 'raiva', 'chuva',
]

function numeroAleatorio(maximo) { 
    return Math.floor(Math.random() * maximo)
}

const palavraDoDia = dicionario[numeroAleatorio(dicionario.length)]

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

function lerPalavra() {
    leitor.question('Digite a palavra: ', (resposta) => {
        if(resposta.length != 5) {
            console.log('informe uma palavra com 5 letras')
            return lerPalavra()
        }
        verificarPalavra(resposta)
        lerPalavra()
    });
  }

  lerPalavra()