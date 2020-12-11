//Exercícios de interpretação de código
// Exercício 1

// O código chama a função conversor de moeda e armazena na variável meu dinheiro.
// A função recebe um valor (valorEmDolar), pergunta ao usário a cotação do dia e retorna
// uma string informando o valor convertido em R$.
// O valor é impresso no console.

//Exercícios de interpretação de código
// Exercício 2

// A função investeDinheiro recebe dois parâmetros, o primeiro é relativo ao tipo de investimento e o segundo o valor do investimento.
// A variável tipoDeInvestimento é discriminada com um switch entre os valores: "Poupança", "Renda Fixa0", "CDB", "Ações" e caso não seja uma destes,
// retorna um alerta. Para cada caso (case) discriminado, multipllica-se o valor por uma constante, com resultado em uma variável local chmada valorAposInvestimento.
// Esta variável retorna como valor da função.
// Neste código foram criadas duas variáveis novoMontante e segundoMontante que armazenam valores da função para Ações no de 150 e Tesouro 
// Direto no valor 200. Os resulatados são impressos na tela.

//Exercícios de interpretação de código
// Exercício 3

// O código cria 3 arrays, uma com elementos de números inteiros e outras duas sem elementos.
// A função for separa os elementos pares e os armazena no array1 e os ímpares são armazenados no array2.
// Depois imprime-se no console a quantidade total de elementos do primeiro array, imprime-se a quantidade de pares e ímpares.


//Exercícios de interpretação de código
// Exercício 3

// Este código tem uma array de elementos inteiros numreros, utiliza um for para iterar neste array e encontrar o maio e menor valor.
// Estes são armazenados nas variáveis numero1 e numero2 e posteriormente impressos no console.



//Exercícios de lógica de programação
// Exercício 1
// array =[]
// for (let index = 0; index < 10; index++) {
//     array.push(index)  
// }
// console.log(array)
// for(let index = 0; index < array.length; index++){
//     console.log(array[index])
// }
// console.log(array)
// for (const iterator of array) {
    
//     console.log(iterator)
// }
// console.log(array)
// let index =0
// while (index < array.length) {
    
//     console.log(array[index])
//     index++
// }

//Exercícios de lógica de programação
// Exercício 2]

//a. false

// b. true

// c. true 

// d. true 

// e. true, mas pode ter um erro pois se repetiu o booleano3 duas vezes sem parênteses.

//Exercícios de lógica de programação
// Exercício 3

//Não funciona pois o valor de i será sempre zero, ou seja, loop infinito. Deve-se somar ao i uma unidade a cada iteração.

// const quantidadeDeNumerosPares
// let i = 0
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }


//Exercícios de lógica de programação
// Exercício 4

// let ladosDosTriangulos =() =>{
//     let primeiroLado = Number(prompt('insira o tamanho do lado'))
//     let segundoLado = Number(prompt('insira o tamanho do lado'))
//     let terceiroLado = Number(prompt('insira o tamanho do lado'))


//     if ( (primeiroLado === segundoLado) && (segundoLado === terceiroLado)){
//         return 'triângulo equilátero'
//     } else if (((primeiroLado === segundoLado) && (segundoLado !== terceiroLado)) ||
//              ((terceiroLado === segundoLado) && (segundoLado !== primeiroLado)) ||
//              ((primeiroLado === terceiroLado) && (segundoLado !== primeiroLado))      
//     ){
//         return 'triângulo isósceles'
//     } else{
//         return 'triângulo escaleno'
//     }    
// }

// console.log(ladosDosTriangulos())


//Exercícios de lógica de programação
// // Exercício 5  
// let numerosDivisiveis =(numeroMaior, numeroMenor) =>{
//     if(numeroMaior % numeroMenor ===0){
//         return `${numeroMaior} é divisível por ${numeroMenor}.`
//     } else{
//         return `${numeroMaior} não é divisível por ${numeroMenor}.`
//     }
// }
// let diferencaEntreNumeros =(numeroMaior, numeroMenor) =>{
//     return `A diferença entre os valores é de ${numeroMaior - numeroMenor}.`
// }

// let compararNumeros = (numero1, numero2) =>{
//     let mensagem = ''
//     let  divisibilidade = ''
//     let diferenca 
//     if (((numero1 < 0) || (numero2 < 0)) || ((numero1 % 1 !==0) || (numero2 % 1 !==0))) {
//         return console.log('Insira valores inteiros maiores que zero.')
//     } 

//     if (numero1 > numero2) {
//         divisibilidade = numerosDivisiveis(numero1,numero2)
//         diferenca = diferencaEntreNumeros(numero1,numero2)
//         mensagem += `${numero1} maior que ${numero2}.` 

//     } else if(numero1 < numero2) {
//         divisibilidade = numerosDivisiveis(numero2,numero1)
//         diferenca = diferencaEntreNumeros(numero1,numero2)
//         mensagem += `${numero1} menor que ${numero2}.`

//     } else{
//         mensagem += `Ambos valores são iguais a ${numero2}.`
//     }
//     return mensagem + ` ${divisibilidade} ${diferenca}`
// }
// console.log(compararNumeros(1,5.3))


//Exercício de funções
// Exercício 1

// let NumeroMaior = (array) =>{
    
//     let maior = 0
//     let menor = Infinity

//     for (let valor of array) {
//         if (valor > maior) {
//             maior = valor
//         }

//         if (valor < menor) {
//             menor = valor
//         }
//     }

//     return [menor, maior]

// }
// let segundoNumeroMaior = (array) =>{
//     let numerosExtremos = NumeroMaior(array)
//     let menor = numerosExtremos[0]
//     let maior = numerosExtremos[1] 

//     array.splice(array.indexOf(menor),1)
//     array.splice(array.indexOf(maior),1)

//     let segundosExtremos = NumeroMaior(array)

//     let segundoMaior = segundosExtremos[1]
//     let segundoMenor = segundosExtremos[0]
//     console.log(`O segundo maior número do array é: ${segundoMaior}.`)
//     console.log(`O segundo menor número do array é: ${segundoMenor}.`)
// }
// let array = [1,2,3,44,5,6,0,7,8,99,88,0,2,3,-10,-11]

// segundoNumeroMaior(array)