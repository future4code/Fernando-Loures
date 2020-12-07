//EXERCÍCIO 1
// Leia o código abaixo:

// ```jsx
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
// ```

// a. O que vai ser impresso no console?

// b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` 
//e `minhaFuncao(10)`? O que apareceria no console?


/*************************SOLUÇÃO exercício1 ************************** */
//a
//Será impresso 10 e 50, em linhas diferentes.

//b
// As funções retornariam os valores 10 e 50, mas seria em vão, porque não há variável para armazena-los. O console não
// imprimiria os valores na tela.

/************************* FIM DA SOLUÇÃO exercício1 ************************** */



// EXERCÍCIO 2
// Leia o código abaixo:

// ```jsx
// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)
// ```

// a. Explicite quais são as saídas impressas no console

// b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?

/*************************SOLUÇÃO exercício 2 ************************** */
//a.
// A saída seria os dois primeiros elementos do array "arrayDeNomes", ou seja, Darvas em uma linha e Caio na seguinte.
//Darvas
//Caio

//b.
// Seria impresso:
//Amanda
//Caio





/************************* FIM DA SOLUÇÃO exercício2 ************************** */
// EXERCÍCIO 3
// O código abaixo mostra uma função que recebe um array e devolve outro array. 
// Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

// ```jsx
// 	const metodo = (array) => {
//   let arrayFinal = [];

//   for (let x of array) {
// 		if (x % 2 === 0) {
// 	    arrayFinal.push(x * x)
// 		}
//   }

//   return arrayFinal;
// }
// ```


/*************************SOLUÇÃO exercício3 ************************** */
// Esta função recebe um parâmetro array, ou lista de números inteiros, seleciona os elementos pares deste array e retorna 
// um novo array  chamado arrayFinal com os quadrados destes elementos pares.

/************************* FIM DA SOLUÇÃO exercício3 ************************** */

// **Exercícios de escrita de código**

// EXERCÍCIO 4

// Escreva as funções explicadas abaixo:

// a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

// ```
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// ```

// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui 
// entradas, apenas imprimir essa mensagem.

// b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), 
// a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma
//  `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

// ```
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.


/*************************SOLUÇÃO exercício4 ************************** */
console.log('\n Exercício 4')
//a.

function apresentacao(){
    console.log(`Eu sou Fernando, tenho 30 anos, moro em Belo Horizonte e sou estudante.`)
}
apresentacao()

//b.

let informacoesPessoais = function(nome, idade, cidade, estudante){
    if (estudante){
        estudante = 'sou'
    } else{
        estudante = 'não sou'
    }
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante.`)
}

informacoesPessoais('Fernando', 30, 'Belo Horizonte', true)
informacoesPessoais('José', 48, 'Itaguaina', false)
// /************************* FIM DA SOLUÇÃO exercício4 ************************** */




// EXERCÍCIO 5

// Escreva as funções explicadas abaixo:

// a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
// Invoque a função e imprima no console o resultado.

// b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 
//     `console.log` dentro da função, use outra estrutura de código para isso)



/*************************SOLUÇÃO exercício5 ************************** */
console.log('\n Exercício 5')
//a.
let somaEntradas = (entrada1, entrada2) => {
    return entrada1 + entrada2
}
console.log('Valor da soma:',somaEntradas(25,83))

//b.
let compararNumeros = (numero1, numero2) =>{
    if (numero1 >= numero2){
        return true
    }else{
        return false
    }
}
console.log('253 é maior ou igual a 83:',compararNumeros(253,83))

//c.
let imprimirParametro = (mensagem) =>{
    for (let index = 0; index < 10; index++) {
        console.log(mensagem);
    }

}
imprimirParametro('Esta mensagem é para o exercício 5.')


/************************* FIM DA SOLUÇÃO exercício5 ************************** */







// EXERCÍCIO 6

// Para os itens a seguir, considere o seguinte array para os seus testes:

// ```jsx
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// ```

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par


/*************************SOLUÇÃO exercício6 ************************** */
console.log('\n Exercício 6')
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//a.
let quantidadeDeElementos = (array) =>{
    return array.length
}
console.log('Quantidade de elementos do array:',quantidadeDeElementos(array))

//b.
let numeroPar = (numero) =>{
    if (numero % 2 ===0){
        return true
    } else{
        return false
    }
}
num = 40
console.log(`O número ${num} é par? ${numeroPar(num)}`)

//c. 
let quantidadeDeNumerosPares = (array) =>{
    let contaPares =0
    for(num of array){
        if (num % 2 ===0){
            contaPares++
        } 
    }
    return contaPares

}

console.log('Quantidade de números pares é:', quantidadeDeNumerosPares(array))

//d. 
let numerosParesDoArray = (array) =>{
    let contaPares =0
    for(num of array){
        if (numeroPar(num)) {
            contaPares++
        }
    }
    return contaPares
}
console.log('Quantidade de números pares é:',numerosParesDoArray(array))

/************************* FIM DA SOLUÇÃO exercício6 ************************** */



/************************************************************************************************
 * 
 *                                      DESAFIOS
 * 
 *     *********************************************************************************
 */




// EXERCÍCIO 1

// Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do 
// código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções: 

// 1.  Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro.
// 2. Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores 
// e chame a sua primeira função mandando este resultado da soma como entrada para imprimí-lo.



/*************************SOLUÇÃO exercício1 DESAFIO************************** */
//1.
console.log('\n Exercício 1 - DESAFIO')
let imprimeNaTela = (parametro) =>{
    console.log(parametro)
}
console.log('desafio 1')
imprimeNaTela("Este é um parâmetro")

let somaParametros = (valor1, valor2) =>{
    imprimeNaTela(valor1 + valor2)
}
somaParametros(25,1)
/************************* FIM DA SOLUÇÃO exercício1 DESAFIO ************************** */




// EXERCÍCIO 2

// Considere o seguinte array e utilize ele para os exercícios:

// ```jsx
// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// ```

// a. Escreva uma função que receba um array como parâmetro e retorne um array com apenas os números pares e multiplicados por 2.

// b. Escreva uma função que receba um array como parâmetro e retorne o maior número deste array.

// c. Escreva uma função que receba um array como parâmetro e retorne o **índice** do maior número deste array.

// d. Escreva uma função que recebe um array como parâmetro e retorne este array invertido.

// - Exemplo

//     Para o array dado como entrada, retorne:

//     ```jsx
//     [13, 12, 41, 15, 10, 16, 23, 8, 0]
//     ```


/*************************SOLUÇÃO exercício2 DESAFIO************************** */
//1.
console.log('\n Exercício 2 - DESAFIO')

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

let retornaODobroDosPares = (array) =>{
    let novoArray = []
    for(num of array){
        if (num % 2 ===0) {
            novoArray.push(num*2)
        }
    }
    return novoArray
}
console.log('array: ',numeros,'\n Após a função que retorna o dobro dos pares:',retornaODobroDosPares(numeros))


let retornaOMaior = (array) =>{
    let maiorNumero = array[0]
    for(num of array){
        if (num > maiorNumero){
            maiorNumero = num
        }
    }
    return maiorNumero
}
console.log('O maior número do array é: ', retornaOMaior(numeros))


let retornaOMaiorIndice = (array) =>{
    let maiorNumero = array[0]
    let maiorIndice = 0
    for(let index =0; index < array.length; index++){
        if (array[index] > maiorNumero){
            maiorNumero = array[index]
            maiorIndice = index
        }
    }
    return maiorIndice
}
console.log('O maior número está no índice do array: ', retornaOMaiorIndice(numeros))



let inverterArray = (array) =>{
    let arrayInvertida =[],
        tamanhoDaArray = array.length

    for (let index = tamanhoDaArray-1; index>=0; index--) {
        arrayInvertida.push(array[index])
        
    }
    return arrayInvertida
}

console.log(`Array invertida:`, inverterArray(numeros))

/************************* FIM DA SOLUÇÃO exercício2 DESAFIO ************************** */

























