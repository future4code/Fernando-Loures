// **Exercícios de interpretação de código**

// EXERCÍCIO 1

// O que o código abaixo está fazendo? Qual o resultado impresso no console?

// ```jsx
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// ```

/********************SOLUÇÃO EXERCÍCIO 1 *******************************/

// O código acima soma 1 a variável valor 5x e imprime o valor 5.



//2
// Leia o código abaixo:

// ```jsx
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// ```

// a. O que vai ser impresso no console?

// // b. Se eu quisesse acessar o **índice** de cada elemento dessa lista,
//  o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

/********************SOLUÇÃO EXERCÍCIO 2*******************************/

//a. O código imprimirá os valores maiores que 18 do array lista. Ou seja:
/*
19
21
23
25
30
*/

//b. O for ... of pode ser uma solução sim, desde que se coloque uma variável i=0 que soma um a cada repetição do 
// for. No entanto, seria mais interessante utilizar o for( let i=0, i<lista.length, i++).



/*
EXERCÍCIO 3

Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto
somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

a. Escreva um programa que:

- **Imprima** cada um dos valores do array original.

b. Escreva um programa que:

- **Imprima** cada um dos valores do array original divididos por 10

c. Escreva um programa que:

- **Crie** um novo array contendo, somente, os números pares do array original.
- **Imprima** esse novo array

d. Escreva um programa que:

- **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
- **Imprima** este novo array

e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

- Dica

Exemplos do que o código tem que fazer em cada item:

```jsx
// Este array será usado para exemplificar as respostas de todos os itens
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// Resposta item a.
80
30
130
40
60
21
70
120
90
103
110
55

// Resposta item b.
8
3 
13
4
6
2.1
7 
12
9
10.3
11 
5.5

// Resposta item c.
[80, 30, 130, 40, 60, 70, 120, 90, 110] 

// Resposta item d.
[ 'O elemento do índex 0 é 80',
  'O elemento do índex 1 é 30',
  'O elemento do índex 2 é 130',
  'O elemento do índex 3 é 40',
  'O elemento do índex 4 é 60',
  'O elemento do índex 5 é 21',
  'O elemento do índex 6 é 70',
  'O elemento do índex 7 é 120',
  'O elemento do índex 8 é 90',
  'O elemento do índex 9 é 103',
  'O elemento do índex 10 é 110',
  'O elemento do índex 11 é 55' ]

// Resposta e.
"O maior número é 130 e o menor é 21"
 */

 /********************SOLUÇÃO EXERCÍCIO 2*******************************/

//  let arrayOriginal = []
//  for (let index = 0; index < 20; index++) {
//      arrayOriginal.push(3*index)
     
//  }

//  //a. imprimir os elementos
//  for(elemento of arrayOriginal){
//      console.log(elemento)
//  }


//  //b. imprimir elementos dividos por 10.
//  for(elemento of arrayOriginal){
//     console.log(elemento/10)
// }

// //c Pares do ArrayOriginal

// let paresArrayOriginal = []

// for(elemento of arrayOriginal){
//     if (elemento % 2 === 0){
//         paresArrayOriginal.push(elemento)
//     }
// }
// console.log(paresArrayOriginal)

// //d novoArray O elemento do índex 11 é 55

// let novoArray =[]
// for (let index = 0; index < arrayOriginal.length; index++) {
//     novoArray.push(`O elemento do índex ${index} é ${arrayOriginal[index]}`)
    
// }
// console.log(novoArray)

// //e Maior e menor número

// let maiorNumero = arrayOriginal[0], 
//     menorNumero = arrayOriginal[0]

// for(elemento of arrayOriginal){
//     if (elemento > maiorNumero) {
//         maiorNumero = elemento
//     }

//     if (elemento < menorNumero) {
//         menorNumero = elemento
//     }

// }
// console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)



/****************************DESAFIOS ************************* */

// - Desafio (faça apenas se terminar tudo!)

//     DESAFIO 1

//     Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? 

//     ```jsx
//     const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//     let quantidadeAtual = 0
//     while(quantidadeAtual < quantidadeTotal){
//       let linha = ""
//       for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//         linha += "0"
//       }
//       console.log(linha)
//       quantidadeAtual++
//     }

//     ```

/**************************************DESAFIO 1 **************************************/

//O resultado seria um triângulo com cinco zeros, 
// 0
// 00
// 000
// 0000
// 00000

// 

/*
Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre
 duas pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar 
 em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o 
 número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

```
Vamos jogar!
O número chutado foi: 3
Errrrrrrrou, é maior
O número chutado foi: 18
Errrrrrrrou, é menor
O número chutado foi: 15
Errrrrrrrou, é menor
O número chutado foi: 11
Acertou!!
O número de tentativas foi: 4 

```

Um resumo das funcionalidades são:

- Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
- A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado
 no console:
    - O número chutado, com a mensagem: `O número chutado foi: <número>`
    - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
- Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, 
`O número de tentativas foi : <quantos chutes o usuário deu>`
- OBS

    Vocês tem a liberdade para serem 100% criativos quanto às mensagens deste exercício, mas lembrem-se de cobrir todos os casos pedidos!
*/

/******************DESAFIO 2 ************************* */

// let primeiroNumero = Number(prompt("Insira o primeiro número:"))
// console.log("-- Vamos Jogar! --")
// let numeroChute, 
//     tentativas = 0
// while (numeroChute !== primeiroNumero) {
//     tentativas += 1
//     numeroChute = Number(prompt("Segundo jogador, dê  chute:"))
//     console.log(`O número chutado foi: ${numeroChute}`)

//     if (numeroChute > primeiroNumero) {

//         console.log(`Errou. O número escolhido é maior`)

//     } else if (numeroChute < primeiroNumero){
//         console.log(`Errou. O número escolhido é menor`)
//     } else{
//         console.log('Acertou!')
//         console.log(`O número de tentativas foi : ${tentativas}`)
//     }
// }


/******************DESAFIO 3 ************************* */


let primeiroNumero = Math.floor((Math.random() * 100) + 1); 
console.log("-- Vamos Jogar! --")
let numeroChute, 
    tentativas = 0
while (numeroChute !== primeiroNumero) {
    tentativas += 1
    numeroChute = Number(prompt("Segundo jogador, dê  chute:"))
    console.log(`O número chutado foi: ${numeroChute}`)

    if (numeroChute > primeiroNumero) {

        console.log(`Errou. O número escolhido é maior`)

    } else if (numeroChute < primeiroNumero){
        console.log(`Errou. O número escolhido é menor`)
    } else{
        console.log('Acertou!')
        console.log(`O número de tentativas foi : ${tentativas}`)
    }
}

// Foi fácil resolver o exercício sim, porque as variáveis estão com nomes que apontam para a função delas no código, por exemplo primeiroNumero
// e numeroChute. Além disso, código está identado, o que facilita a leitura. Não pode desprezar que o código tem 16 linhas apenas, se fossem muitas linhas
// a aplicação do clean code deveria seguir os padrões do projeto.