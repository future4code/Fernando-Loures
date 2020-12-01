/* EXERCÍCIO 1

const bool1 = true    
const bool2 = false
const bool3 = !bool2    //true

let resultado = bool1 && bool2 
console.log("a. ", resultado)      //a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)     //b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)  //c. true

console.log("e. ", typeof resultado)  //e. boolean
 */



/* EXERCÍCIO 2

let array
console.log('a. ', array)    // a. undefined

array = null
console.log('b. ', array)    // b. null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)            // c. 11


let i = 0
console.log('d. ', array[i])   // d. 3


array[i+1] = 19
console.log('e. ', array)   // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]


const valor = array[i+6]  
console.log('f. ', valor) // f. 10
* /


/*
**Exercícios de escrita de código**

1. Faça um programa que:
a. Pergunte a idade do usuário
b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

Dica: não se esqueça de converter as respostas para o tipo número

c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)*/
/*
console.log('Exercício 1:')

let idade = prompt("qual sua idade?")
let idadeAmigo = prompt("qual é a idade do melhor amigo(a)?")
resultado = Number(idade) > Number(idadeAmigo)
console.log(`Sua idade é maior do que a do seu melhor amigo? ${resultado}`)

console.log(`A diferença de idade é ${idade - idadeAmigo}`)

*/

/* 2. Faça um programa que:
a. Peça ao usuário que insira um número **par**.

Dica: não se esqueça de converter a resposta para o tipo número

b. Imprima na tela **o resto da divisão** desse número por 2.
c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

// console.log("Exercício 2")
// numero = prompt("Insira um número par:")
// console.log(`Resto da divisão: ${Number(numero)%2}`)
// //O resto é sempre zero.
// // Se o número for ímpar, o resto é sempre 1.

/*
.
Faça um programa, seguindo os passos:
a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c. Imprima o array na tela
d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
e. Remova da lista o item de índice que o usuário escolheu.
f. Imprima o array na tela
*/
// console.log('Exercício 3')
// let listaDeTarefas =[]
// listaDeTarefas[0] = prompt('Digite uma tarefa que vai realizar hoje:')
// listaDeTarefas[1] = prompt('Digite uma tarefa que vai realizar hoje:')
// listaDeTarefas[2] = prompt('Digite uma tarefa que vai realizar hoje:')
// console.log(listaDeTarefas)

// listaDeTarefas.splice(prompt("digite o índice já realizado: 0, 1 ou 2",1))
// console.log(listaDeTarefas)


/*
4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
 */
// console.log('Exercício4')
// let nomeDoUsuario = prompt("Digite seu nome"), 
//     emailDoUsuario = prompt("Digite seu e-mail")

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)


/***************DESAFIOS ***************************/

/*1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)

        ```
        (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
        ```

    - Graus Celsius(°C) para Graus Fahrenheit (°C)

        ```
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32
        ```

    a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

    b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

    c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

    d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter. */

//     console.log('Exercício1 - desafio')
// //a
//     console.log(`77°F em  K é ${((77-32)*5/9) + 273.15}K`)
// //b
//     console.log(`80°C em  F é ${(80*9/5)+32}F`)
// //c
//     let val = (30*9/5)+32
//     console.log(`30°C em  F é ${val}F`)
//     console.log(`${val}°F em  K é ${((val-32)*5/9) + 273.15}K`)
// //d
// let valInserido = prompt("Insira um valor em Celsius")
// let converte = (valInserido*9/5)+32
// console.log(`${valInserido}°C em  F é ${converte}F`)
// console.log(`${converte}°F em  K é ${((converte-32)*5/9) + 273.15}K`)

/*2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de 
energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa
 que receba a quantidade de quilowatts consumida por uma residência.

    a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;

    b. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o 
    valor a ser pago pela mesma residência acima considerando 15% de desconto. */


// console.log('Exercício 2 - desafio')
// let energia = Number(prompt("Digite o consumo em quiloWatts:")) 
// let desconto = Number(prompt("Insira a porcentagem de desconto:"))
// console.log(`Valor a ser pago sem desconto é ${energia*0.05} reais.`)
// console.log(`Valor a ser pago com desconto é ${energia*0.05*(1-desconto/100)} reais.`)
// console.log(`Valor descontado é ${energia*0.05*(desconto/100)} reais.`)



/*
3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. 
Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). 
Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal), 
 xícaras (xic). Dada essa introdução, faça o que se pede:

    a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg.
     Imprima  a resposta no console da seguinte forma: 
    `20lb equivalem a X kg`

    b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. 
    Imprima  a resposta no console da seguinte forma: 
    `10.5oz equivalem a X kg`

    c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m.
     Imprima  a resposta no console da seguinte forma: 
    `100mi equivalem a X m`

    d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m.
     Imprima  a resposta no console da seguinte forma: 
    `50ft equivalem a X m`

    e. Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. 
    Imprima  a resposta no console da seguinte forma: 
    `103.56gal equivalem a X l`

    f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro.
     Imprima  a resposta no console da seguinte forma: 
    `450 xic equivalem a X l`

    g. Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade
     original antes de converter.
    */

console.log("Exercício 3 - Desafio")
//a
let libras = Number(prompt("Digite o valor em libras:"))
console.log(`${libras}lb equivalem a ${0.453592*libras} kg`)

//b
let oz = Number(prompt("Digite o valor em oz:"))
console.log(`${oz}oz equivalem a ${35.274*oz} kg`)

//c
let milhas = Number(prompt("Digite o valor em milhas:"))
console.log(`${milhas} milhas equivalem a ${1609.34*milhas} m`)


//d
let pes = Number(prompt("Digite o valor em pes:"))
console.log(`${pes}feet equivalem a ${0.3048*pes} m`)

//e
let gal = Number(prompt("Digite o valor em galão:"))
console.log(`${gal}gal equivalem a ${gal*3.78541} l`)

//f
let xic = Number(prompt("Digite o valor em xicara:"))
console.log(`${xic}lb equivalem a ${0.24*xic} l`)

//g Está feito acima



