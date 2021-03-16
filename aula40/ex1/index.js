const name = process.argv[2]
const age = process.argv[3]

let red = '\u001b[31m';
let blue = '\u001b[34m';

if (!name || !age) {
    console.log(`${red} Parâmetros nome e idade devem ser adicionados.`)
} else {
    console.log(`${blue} Meu nome é ${name}, tenho ${age} anos. Em sete anos terei ${Number(age)+7} anos`)
}