// EXERCÍCIO 1

// Leia o código abaixo:

// ```jsx
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// ```

// Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console 
// "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?

/*************************Solução EXERCÍCIO1******************************/

/* Este exercício testa se os números são pares, caso o resto da divisão por 2 seja 0, o número é par, ele passa no teste.
Caso contrário, ele é ímpar, ou seja não passa no teste.




/*
EXERCÍCIO 2

O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado.
 Veja abaixo:

```jsx
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
```

a. Para que serve o código acima?

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos
 o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?*/
 
/*******************Solução EXERCÍCIO 2***************************** */

/*a.  O exercício acima serve para precificar as frutas do mercado, cao seja uma laranja o preço é 3,50, caso maçã 2,25, ~
caso uva 0,30, caso pêra 5,50, e caso não seja nenhum deles coloca-se preço de 5 reais.

b. O preço da fruta  Maçã é R$ 2.25

c. O preço da fruta Pêra é R$ 5





/*EXERCÍCIO 3

Leia o código abaixo:

```jsx
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
```

a. O que a primeira linha está fazendo?

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
 */

 /*****************Solução EXERCÍCIO3 ****************************/
 /*
 a. A primeira linha está transformando uma string, valor inserido pelo usuário, em Number.
 b. Esse número passou no teste.
    Seguida de um erro no console, porque a variável mensagem está no escopo local e não está declarada no escopo global.
 c. A resposta está acima.
 */


 /*EXERCÍCIO 4

Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade 
dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console 
`"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */

/***************************solução EXERCÍCIO 4****************************** */

// let idade = Number(prompt("Insira sua idade:"))
// if (idade >= 18) {
//     console.log("Você pode dirigir")
    
// } else if{
//     console.log("Você não pode dirigir")   
// }else{
//     console.log("Digite um valor válido")
// }


/* exercício 5
Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

- Exemplo

    Se o usuário digitar "V", a saída deve ser:

    ```
    "Boa Tarde!"
    ```
*/
/*****************************Solução EXERCÍCIO 5 ***************************/
// let turno = prompt("Em qual turno você estuda? M para matutino, V para vespertino, e N para noturno.")

// if (turno === 'N' || turno === 'M' || turno === 'V') {
//     if (turno === 'M') {
//         console.log('Bom dia!')
//     } else if(turno === 'V'){
//         console.log('Boa tarde!')
//     }else{
//         console.log('Boa noite!')
//     }
// } else {
//     console.log("Digite um valor válido.")
// }



// EXERCÍCIO 6
// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

/*******************Solução Exercício 6******************************* */

// let turno = prompt("Em qual turno você estuda? M para matutino, V para vespertino, e N para noturno.")
// switch (turno) {
//     case 'M':
//         console.log("Bom dia.")
//         break;
//     case 'V':
//         console.log("Boa tarde.")
//         break;
//     case 'N':
//         console.log("Boa noite.")
//         break;

//     default:
//         console.log("Digite um valor válido.")
//         break;
// }

/* Exercício 7
Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia
 e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão 
 assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
 Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

 */
/**********************solução EXERCÍCIO 7************************** */

// let genero = prompt("Qual genero de file deseja assistir?")
// let preco = prompt("Qual valor do ingresso?")
// if (genero === 'fantasia' && preco < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

/**************************************DESAFIOS********************************************** */

/*
DESAFIO 1

Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário,
 pelo `prompt` que snack ele vai comprar (pipoca, chocolate, doces, etc) 
e imprima no console as mensagens "Bom filme!" e "... com `[SNACK]`", trocando [SNACK] pelo que o usuário colocou no input.
*/

/************************** DESAFIO 1 ************************ */

// let genero = prompt("Qual genero de file deseja assistir?")
// let preco = prompt("Qual valor do ingresso?")
// let snack
// if (genero === 'fantasia' && preco < 15) {
//     snack = prompt("Qual snack voce quer?")
//     console.log(`Bom filme! E aproveite o ${snack} `)
// } else {
//     console.log("Escolha outro filme :(")
// }



/* DESAFIO 2
DESAFIO 2

Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve 
fornecer algumas informações:

- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor 
de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há
a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos
domésticos, mas seus preços devem ser dados em dólar (considerar a cotação de U$1,00 = R$4,10)

**Tabela de preços**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png)

**Exemplos de saídas**

Jogo nacional

```
---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Nacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  R$ 1980
Valor total:  R$ 19800

```

Jogo internacional

```
---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  U$ 482.92682926829275
Valor total:  U$ 4829.2682926829275

```
*/

/******************DESAFIO 2 ********************************** */

let nomeCliente = prompt("Insira o nome completo:"),
    tipoJogo = prompt("Insira o tipo de jogo, IN para internacional e DO para doméstico:"),
    etapaJogo = prompt("Insira a etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final:"),
    categoria = prompt("Insira a categoria: pode ser as opções 1, 2, 3 ou 4:"),
    quantidade = Number(prompt("Insira a quantidade de ingressos:")),
    valor =1

if ((tipoJogo === 'IN' || tipoJogo === 'DO') && 
    (etapaJogo === 'SF' || etapaJogo === 'DT' || etapaJogo === 'FI') &&
    (categoria === '1' || categoria === '2' || categoria === '3' || categoria === '4') &&
    (quantidade>0 && (quantidade%2 === 1 ||  quantidade%2 === 0))
    ){ //VALIDAÇÃO DAS HIPÓTESES
    console.log("Valor válido")
    
    if (etapaJogo === 'SF') {
        if (categoria === '1') {
            valor *= 1320
        } else if(categoria ==='2'){
            valor *= 880
        } else if(categoria ==='3'){
            valor *= 550
        } else if(categoria ==='4'){
            valor *= 220
        }
    } else if(etapaJogo === 'DT'){
        if (categoria === '1') {
            valor *= 660
        } else if(categoria ==='2'){
            valor *= 440
        } else if(categoria ==='3'){
            valor *= 330
        } else if(categoria ==='4'){
            valor *= 170
        }
    } else if(etapaJogo === 'FI'){
        if (categoria === '1') {
            valor *= 1980
        } else if(categoria ==='2'){
            valor *= 1320
        } else if(categoria ==='3'){
            valor *= 880
        } else if(categoria ==='4'){
            valor *= 330
        }
    }
    
    //impressão na tela
    //Tipo de jogo
    if (tipoJogo ==='IN') {
        tipoJogo ='Internacional'
    } else {
        tipoJogo ='Nacional'
    }

    // Etapa do jogo
    if (etapaJogo === 'SF') {
        etapaJogo = 'Semifinais'
    } else if (etapaJogo === 'DT'){
        etapaJogo ="Decisão do 3° lugar"
    }else{
        etapaJogo = 'Final'
    }

    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCliente}`)
    console.log(`Tipo de jogo: ${tipoJogo}`)
    console.log(`Etapa do jogo: ${etapaJogo}`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidade} ingressos`)
    console.log("--Valores--")
    if (tipoJogo === 'internacional') {
        console.log(`Valor do ingresso: U$ ${valor*4.1}`)
        console.log(`Valor total: U$ ${valor * quantidade * 4.1 }`)
    } else {
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valor * quantidade}`)
    }
    

}else {
    console.log("Valores digitados errados, tente novamente.")
}


