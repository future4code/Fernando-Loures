enum COR_DO_ARCO_IRIS {
    VERDE = "verde",
    AMARELO = "amarelo",
    AZUL = "azul",
    VERMELHO= "vermelho"
}

const minhaString: string = "minha mensagem"
const meuNumero: number | string = "carro"

const luis = {
    nome: "luis",
    idade: 20,
    corFavorita: COR_DO_ARCO_IRIS.AMARELO
}

type pessoa ={
    nome: string,
    idade: number,
    corFavorita: string
}

const menino: pessoa = {
    nome: 'José',
    idade: 25,
    corFavorita: COR_DO_ARCO_IRIS.VERDE
}