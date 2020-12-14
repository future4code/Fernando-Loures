let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    

    // AQUI VEM A IMPLEMENTAÇÃO
    
    // despesas.forEach((despesa,index,array) => {
    //     despesa.valor =20
    //     divDespesas.innerHTML += `<p>Valor: ${despesa.valor} | Tipo: ${despesa.tipo} | Descricao: ${despesa.descricao}<p>`
    // });

//     const callDespesa = (despesa, index, array) =>{
//         return divDespesas.innerHTML += `<p>Valor: ${despesa.valor} | Tipo: ${despesa.tipo} | Descricao: ${despesa.descricao}<p>`
//     }
//     const impDespesas = despesas.map(callDespesa)

    despesas.map((despesa,index, array) =>{
        return divDespesas.innerHTML += `<p>Valor: ${despesa.valor} | Tipo: ${despesa.tipo} | Descricao: ${despesa.descricao}<p>`
    })
}



// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    let selectAlimentacao = arrDespesas.filter((despesa) =>{
        return despesa.tipo ==='alimentação'
    })
    selectAlimentacao.map((despesa) =>{
        gastoAlimentacao += despesa.valor
    })

    let selectUtilidades = arrDespesas.filter((despesa) =>{
        return despesa.tipo ==='utilidades'
    })
    selectUtilidades.map((despesa) =>{
        gastoUtilidades += despesa.valor
    })

    let selectViagens = arrDespesas.filter((despesa) =>{
        return despesa.tipo ==='viagem'
    })
    selectViagens.map((despesa) =>{
        gastoViagem += despesa.valor
    })

    // console.log(selectAlimentacao, gastoAlimentacao)
    gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem
    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

   if((valorMax === "") || (valorMin === "") || (tipoFiltro === "")){
        alert("insira valores máximos e mínimos.")
        limparFiltros()
        // filtrarDespesas()
   } else if((valorMax < 0) || (valorMin < 0)){
        alert("insira valores máximos e mínimos maiores que zero.")
        limparFiltros()
        // filtrarDespesas()
   } else if(valorMax < valorMin){
        alert("O valor máximo deve ser maior ao mínimo.")
        limparFiltros()
        // filtrarDespesas()
   }

    let despesasFiltradas // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO


    let filtrar = (despesa) =>{
        console.log(despesa.tipo, despesa.valor)
        if((tipoFiltro=== 'todos') && (despesa.valor > valorMin) && (despesa.valor < valorMax)){
            return true
        }
        if((despesa.tipo === tipoFiltro) && (despesa.valor > valorMin) && (despesa.valor < valorMax)){
            return true
        }
    }
    despesasFiltradas = arrDespesas.filter(filtrar)
    console.log(despesasFiltradas[0])
    

    imprimirDespesas(despesasFiltradas)
}

function ordenarValores(){
    arrDespesas.sort(function (a, b) {
        return b.valor - a.valor;
      });
    console.log(arrDespesas)
    imprimirDespesas(arrDespesas)
}





// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}