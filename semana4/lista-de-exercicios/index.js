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

//Exercício de funções
// Exercício 2

// let helloLabenu = () =>{
//     alert("Hello Labenu!")
// }
// helloLabenu()



// Exercícios de Objetos
// Exercício1
/* Arrays são lista de elementos, muito utilizados quando queremos guardar elementos do mesmo tipo, lista de carros, de compras, de funções e objetos. */
/** Objetos são um bloco de atributos e métodos que se pode acessar a qualquer momento. Por exemplo, um objeto carros podemos guardar atributos como
 * cor, modelo, ano de fabricação, marca etc. Além disso podemos criar métodos para ações de acelerar, frear, mudar de cor, ligar o carro etc. Os códigos predefinidos
 * no computador e linguagens de programação estão armazenados na forma de objeto.
 */




 // Exercícios de Objetos
// Exercício2


// let criaRetangulo = (lado1, lado2) =>{
//     let area = lado1 * lado2
//     let perimetro = 2*(lado1+lado2)
//     let largura = lado1
//     let altura = lado2

//     let retangulo = {
//         area: area,
//         perimetro: perimetro,
//         largura: largura,
//         altura: altura
//     }
//     return retangulo
// }
// let retanguloCriado = criaRetangulo(4, 10)
// console.log(retanguloCriado)



// Exercícios de Objetos
// Exercício3

// let listaDeFilmes = {
//     titulo: "Titanic",
//     ano: "2000",
//     diretor: "João José",
//     atores: ['leonardo Dicaprio', 'Fernanda Lima', 'José', 'Paulo', 'Felizberto', "Astrogildo"],
    
//     listaDeAtores : function(){
//         let mensagem = ''
//         for (const ator of listaDeFilmes.atores) {
//             mensagem += ` ${ator},`
//         }
//         return mensagem
//     },
    
//     imprimirDados : function(){
//         let mensagemAtores =listaDeFilmes.listaDeAtores()
//         console.log(`Venha assistir ao filme ${listaDeFilmes.titulo}, de ${listaDeFilmes.ano}, dirigido por ${listaDeFilmes.diretor} e estrelado por ${mensagemAtores}.`)
//     }
// }
// listaDeFilmes.imprimirDados()


// Exercícios de Objetos
// Exercício 4


// let pessoa = {
//     nome: "Fernando Loures da Silva", 
//     idade: 30, 
//     email: "fernando.loures@hotmail.com",
//     endereco: "Jaqueline, Belo Horizonte MG, Brasil",
// }

// anomizarPessoa = (objeto) => {
//     let novaPessoaAnonima ={
//         nome: "Anônimo",
//         idade: pessoa.idade,
//         email: pessoa.email,
//         endereco: pessoa.endereco

//     }   
//     return novaPessoaAnonima
// }

// console.log(anomizarPessoa(pessoa))



// Exercícios de funções de array
// Exercício1

// let arrayPessoa = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// let pessoaAdulta = arrayPessoa.filter((pessoa, index, array) =>{
//     if (pessoa.idade >=18) {
//         return true
//     }
// })

// let pessoaCrianca = arrayPessoa.filter((pessoa, index, array) =>{
//     if (pessoa.idade <18) {
//         return true
//     }
// })


// console.log(pessoaAdulta)
// console.log(pessoaCrianca)



// Exercícios de funções de array
// Exercício2

// const array = [1, 2, 3, 4, 5, 6]
// let novoArray =[]
// let arrayVezesDois = array.forEach((numero,index,array) =>{
//     numero = 2 * numero
//     novoArray.push(numero)
// })
// console.log(novoArray)

// let novoArray2 =[]
// let arrayVezesTres = array.forEach((numero,index,array) =>{
//     numero = 3 * numero + ""
//     novoArray2.push((numero))
// })
// console.log(novoArray2)

// let novoArray3 =[]
// let arrayParImpar = array.forEach((numero,index,array) =>{
//     if (numero % 2 !==0) {
//         numero = numero + " é ímpar"  
//     } else{
//         numero = numero + " é par"
//     }
//     novoArray3.push((numero))
// })

// console.log(novoArray3)


// Exercícios de funções de array
// Exercício 3

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]


// let permissaoPessoas = pessoas.filter((pessoa, index,array) =>{
//     if ((pessoa.altura >= 1.5) && (pessoa.idade >= 14) && (pessoa.idade <= 60) ){
//         return true
//     }
// })
// console.log(permissaoPessoas)

// let semPermissaoPessoas = pessoas.filter((pessoa, index,array) =>{
//     if (!((pessoa.altura >= 1.5) && (pessoa.idade >= 14) && (pessoa.idade <= 60) )){
//         return true
//     }
// })
// console.log(semPermissaoPessoas)

// let semPermissaoPessoas2 = pessoas.filter((pessoa, index,array) =>{
//     if ((pessoa.altura < 1.5) || ((pessoa.idade < 14) || (pessoa.idade > 60)) ){
//         return true
//     }
// })

// console.log(semPermissaoPessoas2)






// Exercícios de funções de array
// Exercício 4

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]


// let consultaCancelada = consultas.map((cliente, index, array) =>{
//     let genero
//     let lembrar
//     if (cliente.genero ==='masculino'){
//         genero = 'Sr.'
//         lembrar = 'lembrá-lo'
//     } else{
//         genero = 'Sra.'
//         lembrar = 'lembrá-lo'
//     }

//     if (cliente.cancelada){
//         return `Olá, ${genero} ${cliente.nome}. Infelizmente, sua consulta marcada para o dia ${cliente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
//     } else{
//         return `Olá, ${genero} ${cliente.nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${cliente.dataDaConsulta}. Por favor, acuseo recebimento deste e-mail.`
//     }
// })

// console.log(consultaCancelada)


// Exercícios de funções de array
// Exercício 5

// let banco = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// banco.forEach((conta, index, array) => {
//     let valorCompras = 0
//     for (const compra of conta.compras) {
//         valorCompras += compra   
//     }
//     conta.saldoTotal -= valorCompras 
// });
// console.log(banco)





