type estatistica ={
    maior: number,
    menor: number,
    media: number 
}


const obterEstatisticas = (numeros : number[]) : any =>{ //array

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b //numbers
    )

    let soma: number = 0 //number

    for (let num  of numeros) {
        soma += num //number
    }


    const estatisticas : estatistica =  {
        maior: numerosOrdenados[numeros.length - 1], //array
        menor: numerosOrdenados[0], // number
        media: soma / numeros.length // number
    }

    return estatisticas //object
}
// A entrada é um array de numeros
// A saida é um objeto com um array de números, e dois paraâmetros do tipo number.


type amostraDeDados = {
    numeros : Array<number>,
    obterEstatisticas: (numeros: Array<number>) => Array<number>
}

const amostra1: amostraDeDados = {
    numeros: [1,33,55,2,45,66,55],
    obterEstatisticas
}