/* Primeiro Exercício

let nome
let idade
console.log(typeof nome, typeof idade)

O tipo é undefined porque não foi atribuído valor as variáveis, caso 
algum valor numérico, string ou booleano fosse atribuído a variável teria 
um tipo definido.
 

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")
console.log('nome: ' + nome)
console.log('idade: ' + idade)

console.log(typeof nome, typeof idade)

Agora, como esperado, foi atribuído valores do tipo string as variáveis. 

console.log("Olá "+nome+", você tem "+idade+" anos.")

*/
/**********Segundo Exercício****** *
let anoNascimento = prompt("Em que ano você nasceu?")
console.log("1. Em que ano você nasceu?")
console.log("Resposta: "+anoNascimento)

let horasLivres = prompt("O que você faz nas horas livres?")
console.log("2. O que você faz nas horas livres??")
console.log("Resposta: "+ horasLivres)

let bandaPreferida = prompt("Qual sua banda preferida?")
console.log("3. Qual sua banda preferida?")
console.log("Resposta: "+ bandaPreferida)

let filmeFavorito = prompt("Qual seu filme favorito?")
console.log("4. Qual seu filme favorito?")
console.log("Resposta: "+ filmeFavorito)

let comidaPreferida = prompt("Qual sua comida preferida?")
console.log("5. Qual sua comida preferida?")
console.log("Resposta: "+ comidaPreferida)
*/

/*Exercício 3
let comidaFavorita = ['picanha', 'pão de queijo', 'feijoada', 'salpicão', 'frango com orapronobes']
console.log(comidaFavorita)
//console.log(typeof(comidaFavorita))

console.log("Essas são as minhas comidas preferidas: ")
console.log(comidaFavorita[0])
console.log(comidaFavorita[1])
console.log(comidaFavorita[2])
console.log(comidaFavorita[3])
console.log(comidaFavorita[4])

//desafio 3 
comidaFavorita[1] = prompt("Qual sua comida preferida?")
console.log(comidaFavorita)
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidaFavorita[0])
console.log(comidaFavorita[1])
console.log(comidaFavorita[2])
console.log(comidaFavorita[3])
console.log(comidaFavorita[4])


*/
//Exercício 4
let perguntas = ["Você está de casaco?", "Você está na praia?","Está chovendo?"]
let lista = [prompt(perguntas[0]),prompt(perguntas[1]),prompt(perguntas[2])]
console.log(perguntas[0], lista[0])
console.log(perguntas[1], lista[1])
console.log(perguntas[2], lista[2])


