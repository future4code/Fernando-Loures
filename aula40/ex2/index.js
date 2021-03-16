const operator = process.argv[2]
const numberA = Number(process.argv[3])
const numberB = Number(process.argv[4])

switch (operator) {
    case 'add':
        console.log(`A soma é ${numberA + numberB}`)
        break;
    case 'sub':
        console.log(`A subtração é ${numberA - numberB}`)
        break;
    case 'mult':
        console.log(`A multiplicação é ${numberA * numberB}`)
        break;
    case 'div':
        console.log(`A divisão é ${numberA / numberB}`)
        break;

    default:
        break;
}