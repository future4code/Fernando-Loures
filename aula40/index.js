// Para acessar os parâmetros da linha de comando do código utilizamos o process.argv[index].

/////////////////////////////////////////////////////////////////////**

// const name = process.argv[2]
// const age = process.argv[3]
// console.log(`Meu nome é ${name}, tenho ${age} anos. Em sete anos terei ${Number(age)+7} anos`)


/////////////////////////////////////////////////////////////////////**


// const operator = process.argv[2]
// const numberA = Number(process.argv[3])
// const numberB = Number(process.argv[4])

// switch (operator) {
//     case 'add':
//         console.log(`A soma é ${numberA + numberB}`)
//         break;
//     case 'sub':
//         console.log(`A subtração é ${numberA - numberB}`)
//         break;
//     case 'mult':
//         console.log(`A multiplicação é ${numberA * numberB}`)
//         break;
//     case 'div':
//         console.log(`A divisão é ${numberA / numberB}`)
//         break;

//     default:
//         break;
// }

///////////////////////////////////////////////////////////////////////////////
let tasks = [
    "Lavar a louça",
    "Comprar Leite"
]

let index = 2
let task = ""
while (process.argv[index]) {
    task += process.argv[index] + " "
    index += 1
}

tasks.push(task)
for (const t of tasks) {
    console.log(t)
}