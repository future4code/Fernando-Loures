// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

//  /************************BLACKJACK***************************/
 
//  cartasDoBaralho = [ 'A ♥️', '2 ♥️', '3 ♥️', '4 ♥️', '5 ♥️', '6 ♥️', '7 ♥️', '8 ♥️', '9 ♥️', '10 ♥️' ,'J ♥️' ,'Q ♥️' ,'K ♥️',
//                      'A ♣️', '2 ♣️', '3 ♣️', '4 ♣️', '5 ♣️', '6 ♣️', '7 ♣️', '8 ♣️', '9 ♣️', '10 ♣️' ,'J ♣️' ,'Q ♣️' ,'K ♣️',
//                      'A ♦️', '2 ♦️', '3 ♦️', '4 ♦️', '5 ♦️', '6 ♦️', '7 ♦️', '8 ♦️', '9 ♦️', '10 ♦️' ,'J ♦️' ,'Q ♦️' ,'K ♦️',
//                      'A ♠️', '2 ♠️', '3 ♠️','4 ♠️', '5 ♠️', '6 ♠️', '7 ♠️', '8 ♠️', '9 ♠️', '10 ♠️' ,'J ♠️ ' ,'Q ♠️' ,'K ♠️']
         
//             //console.log('Valor', cartasDoBaralho.length)


// let numeroDeCartasNaRodada = 52,
//    jogadorUsuario = [],
//    jogadorComputador = [],
//    cartasDoJogadorUsuario = '',
//    cartasDoJogadorComputador = '',
//    pontoUsuario = 0,
//    pontoComputador = 0,
//    numeroAleatorio


// //1. 
// console.log("Bem vindo ao jogo Blackjack!")

// if(confirm("Quer iniciar uma nova rodada?")){
 
//    console.log("Iniciar uma nova rodada.")
   
//    for (let index = 0; index < 2; index++) {
      
//       //jogadorUsuario
      
//       numeroAleatorio = Math.floor(Math.random() * (numeroDeCartasNaRodada - 0)) + 0;
//       console.log('carta do baralho usuário',cartasDoBaralho[numeroAleatorio]) 
      

//       jogadorUsuario.push(cartasDoBaralho[numeroAleatorio])



//       if ((cartasDoBaralho[numeroAleatorio].slice(0,1)  === 'J') || (cartasDoBaralho[numeroAleatorio].slice(0,1)  === 'Q') || (cartasDoBaralho[numeroAleatorio].slice(0,1)  === 'K')) {
//          pontoUsuario += 10
//       } else if(cartasDoBaralho[numeroAleatorio].slice(0,2) === '10'){
//          pontoUsuario +=  10 
//       } else if ((cartasDoBaralho[numeroAleatorio].slice(0,1) === 'A')) {
//          pontoUsuario +=  11 
//       }
//       else{
//          pontoUsuario += Number(cartasDoBaralho[numeroAleatorio].slice(0,1))
//       }

//       cartasDoBaralho.splice(numeroAleatorio,1) //retirada da carta do array
//       numeroDeCartasNaRodada -= 1

//       console.log('pontos usuários: ',pontoUsuario)



//       //jogadorComputador
      
//       numeroAleatorio = Math.floor(Math.random() * (numeroDeCartasNaRodada - 0)) + 0;
//       console.log('carta do baralho computador',cartasDoBaralho[numeroAleatorio])
      

//       jogadorComputador.push(cartasDoBaralho[numeroAleatorio])



//       if ((cartasDoBaralho[numeroAleatorio].slice(0,1)  === 'J') || (cartasDoBaralho[numeroAleatorio].slice(0,1)  === 'Q') || (cartasDoBaralho[numeroAleatorio].slice(0,1)  === 'K')) {
//          pontoComputador += 10
//       } else if(cartasDoBaralho[numeroAleatorio].slice(0,2) === '10'){
//          pontoComputador +=  10 
//       }else if ((cartasDoBaralho[numeroAleatorio].slice(0,1) === 'A')) {
//          pontoComputador +=  11
//       } else{
//          pontoComputador += Number(cartasDoBaralho[numeroAleatorio].slice(0,1))
//       }

//       cartasDoBaralho.splice(numeroAleatorio,1) //retirada da carta do array
//       numeroDeCartasNaRodada -= 1
      
//       console.log('pontos computador: ',pontoComputador)

//       console.log('-----fim da rodada------------')
//    }

//    /****************RESULTADO************/

//    for (let carta of jogadorUsuario) {
//       cartasDoJogadorUsuario += carta + " "
//       // console.log(cartasDoJogadorUsuario)
//    }


//    for (let carta of jogadorComputador) {
//       cartasDoJogadorComputador += carta + " "
//       // console.log(cartasDoJogadorComputador)
//    }

//    console.log(`Usuário - cartas: ${cartasDoJogadorUsuario}  - pontuação ${pontoUsuario}`)
//    console.log(`Computador - cartas: ${cartasDoJogadorComputador}  - pontuação ${pontoComputador}`)

//    if (pontoUsuario > pontoComputador) {
//       console.log(`O usuário ganhou`)
//    } else if (pontoUsuario < pontoComputador) {
//       console.log(`O Computador ganhou ganhou`)
//    } else {
//       console.log(`Empate!`)
//    }

// }else{
//   console.log("O jogo acabou!")
// }


