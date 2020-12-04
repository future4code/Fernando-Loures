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
//    numeroAleatorio,
//    saida =0, 
//    contador =0,
//    mensagem =''


// //1. 
// console.log("Bem vindo ao jogo Blackjack!")

// if(confirm("Quer iniciar o Jogo?")){
   
//    for (let index = 0; index < 2; index++) {
//       if (saida ===4) {
//          break
//       }
//       contador += 1
//       //jogadorUsuario
      
//       numeroAleatorio = Math.floor(Math.random() * (numeroDeCartasNaRodada - 0)) + 0;
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

//       //jogadorComputador
      
//       numeroAleatorio = Math.floor(Math.random() * (numeroDeCartasNaRodada - 0)) + 0;      
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
      
     

//       // Caso os dois iniciais sejam A
//       if ((jogadorUsuario[0][0] === 'A') && (jogadorComputador[0][0] ==='A')) {
//          index -=1
//          jogadorComputador = []
//          jogadorUsuario = [] 
//       }




//       /******************************Perguntar se deseja comprar mais uma carta ******************************/
      

//       for (let carta of jogadorUsuario) {
//          cartasDoJogadorUsuario += carta + " "
//       }

//       if ((index === 1) && confirm(
//          `Suas cartas são ${cartasDoJogadorUsuario} A carta revelada do computador é ${cartasDoJogadorComputador}.` +
//          "\n"+  // \n faz pular a linha
//          "Deseja comprar mais uma carta?"
//       )){
//          index=0
//          saida +=1
//       }

      
//       cartasDoJogadorComputador = ""

//       for (let carta of jogadorComputador) {
//          cartasDoJogadorComputador += carta + " "
//       }



//       /******************************FIM se deseja comprar mais uma carta ******************************/

//       /******************************Ver quem venceu INÍCIO******************************/
//       if ((pontoUsuario  === 21) && (pontoComputador === 21)) {
//          mensagem = `Empate`
//          saida =4
//          break
//       }
//       if (pontoUsuario  === 21) {
//          mensagem =`O usuário ganhou`
//          saida =4
//          break
//       } 
//       if (pontoComputador === 21) {
//          mensagem =`O Computador ganhou ganhou`
//          saida =4
//          break
//       } 
      


//       if ((pontoUsuario > 21) && (pontoComputador > 21)) {
//          mensagem =`Empate`
//          saida =4
//          break
//       } 

//       if (pontoUsuario  > 21) {
//          mensagem =`O computador ganhou`
//          saida =4
//          break
//       } 
//       if (pontoComputador > 21) {
//          mensagem = `O usuário ganhou`
//          saida =4
//          break
//       } 
      
     


//       /******************************Ver quem venceu FIM******************************/
//       cartasDoJogadorUsuario = ""
//    }

//    /**********************caso o usuário pare e a máquina queira jogar mais */
//    while ((saida === 4) && (pontoComputador < 21) && (pontoComputador < pontoUsuario) && (pontoUsuario < 21)){
//       //jogadorComputador
//       if (contador === 5) {
//          break
//       }
//       contador +=1
      

//       numeroAleatorio = Math.floor(Math.random() * (numeroDeCartasNaRodada - 0)) + 0;      
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
      
//       /******************************Ver quem venceu INÍCIO******************************/
//       if ((pontoUsuario  === 21) && (pontoComputador === 21)) {
//          mensagem = `Empate`
//          saida =4
//          break
//       }
//       if (pontoUsuario  === 21) {
//          mensagem =`O usuário ganhou`
//          saida =4
//          break
//       } 
//       if (pontoComputador === 21) {
//          mensagem =`O Computador ganhou ganhou`
//          saida =4
//          break
//       } 
      


//       if ((pontoUsuario > 21) && (pontoComputador > 21)) {
//          mensagem =`Empate`
//          saida =4
//          break
//       } 

//       if (pontoUsuario  > 21) {
//          mensagem =`O computador ganhou`
//          saida =4
//          break
//       } 
//       if (pontoComputador > 21) {
//          mensagem = `O usuário ganhou`
//          saida =4
//          break
//       } 

//    }





//    /****************RESULTADO************/

//    cartasDoJogadorUsuario = ""
//    cartasDoJogadorComputador = ""

//    for (let carta of jogadorUsuario) {
//       cartasDoJogadorUsuario += carta + " "
//       // console.log(cartasDoJogadorUsuario)
//    }


//    for (let carta of jogadorComputador) {
//       cartasDoJogadorComputador += carta + " "
//       // console.log(cartasDoJogadorComputador)
//    }



//    if ((pontoComputador < 21) && (pontoUsuario < 21))  {
      
//       if (pontoUsuario > pontoComputador) {
//          mensagem = `O usuário ganhou`
//       } else if (pontoUsuario < pontoComputador) {
//          mensagem = `O Computador ganhou ganhou`
//       } else {
//          mensagem = `Empate!`
//       }
//    } 

//    console.log(`Suas cartas são ${cartasDoJogadorUsuario}. Sua pontuação é ${pontoUsuario}`)
//    console.log(`As cartas do computador são ${cartasDoJogadorComputador}. A pontuação do computador é ${pontoComputador}`)
//    console.log(mensagem)
// }else{
//   console.log("O jogo acabou!")
// }





console.log(`Bem vindo ao jogo BlackJack!`)
if(confirm("Quer iniciar uma nova jogada?")) {
    
    let cartaJogadorUsuario,
        cartaJogadorComputador,
        cartasTotaisUsuario ="",
        cartasTotaisComputador ="",
        pontoUsuario =0,
        pontoComputador = 0,
        mensagem


    for (let index = 0; index < 2; index++) {

      cartaJogadorUsuario = comprarCarta()
      cartasTotaisUsuario += (cartaJogadorUsuario.texto) + " "
      pontoUsuario += cartaJogadorUsuario.valor

      if (pontoComputador <18) {
         cartaJogadorComputador = comprarCarta()
         cartasTotaisComputador+= (cartaJogadorComputador.texto) + " "
         pontoComputador += cartaJogadorComputador.valor 
      }
      

        //dois As
        if ((index === 0) && (cartaJogadorUsuario.texto[0] === 'A') && (cartaJogadorComputador.texto[0] === 'A')) {
           cartasTotaisUsuario = ''
           cartasTotaisComputador = ''
           pontoComputador = 0
           pontoUsuario = 0
           index -= 1
        }
        if (index === 1) {
         while (confirm(`Suas cartas são ${cartasTotaisUsuario} A carta revelada do computador é ${cartasTotaisComputador.slice(0,-4)}.
         \n Deseja comprar mais uma carta?`)
         ) {

            
            cartaJogadorUsuario = comprarCarta()
            cartasTotaisUsuario += (cartaJogadorUsuario.texto) + " "
            pontoUsuario += cartaJogadorUsuario.valor

            if (pontoComputador <18) {
               cartaJogadorComputador = comprarCarta()
               cartasTotaisComputador+= (cartaJogadorComputador.texto) + " "
               pontoComputador += cartaJogadorComputador.valor 
            }
            

            if ((pontoUsuario === 21) && (pontoComputador === 21)){
               mensagem = 'Empate' 
               break              
            } else if (pontoUsuario === 21){
               mensagem = 'O usuário venceu!'
               break
            } else if (pontoComputador === 21){
               mensagem = 'O computador venceu!'
               break
            } else if ((pontoUsuario > 21) && (pontoComputador > 21)){
               mensagem = 'Empate'
               break
            } else if (pontoUsuario > 21){
               mensagem = 'O computador venceu!'
               break
            } else if (pontoComputador > 21){
               mensagem = 'O usuário venceu!'
               break
            }

         }
        }
        
        if (index === 1) {
            while ((pontoComputador < 18) && (pontoUsuario <21)){
               cartaJogadorComputador = comprarCarta()
               cartasTotaisComputador+= (cartaJogadorComputador.texto) + " "
               pontoComputador += cartaJogadorComputador.valor 

               if ((pontoUsuario === 21) && (pontoComputador === 21)){
                  mensagem = 'Empate' 
                  break              
               } else if (pontoUsuario === 21){
                  mensagem = 'O usuário venceu!'
                  break
               } else if (pontoComputador === 21){
                  mensagem = 'O computador venceu!'
                  break
               } else if ((pontoUsuario > 21) && (pontoComputador > 21)){
                  mensagem = 'Empate'
                  break
               } else if (pontoUsuario > 21){
                  mensagem = 'O computador venceu!'
                  break
               } else if (pontoComputador > 21){
                  mensagem = 'O usuário venceu!'
                  break
               }
        }
      }

    }
    console.log(cartasTotaisUsuario)
    console.log(cartasTotaisComputador)

    console.log(pontoUsuario)
    console.log(pontoComputador)

    console.log(`Usuário - cartas: ${cartasTotaisUsuario}  - pontuação ${pontoUsuario}`)
    console.log(`Computador - cartas: ${cartasTotaisComputador}  - pontuação ${pontoComputador}`)
    console.log(mensagem)

    if ((pontoUsuario < 21) && (pontoComputador < 21)) {
      
      if (pontoUsuario > pontoComputador) {
         console.log('O usuário ganhou!')
      } else if (pontoUsuario < pontoComputador){
            console.log('O computador ganhou!')
      } else{
            console.log('Empate')
      }
    }

} else {
	console.log(`O jogo acabou.`)
}
