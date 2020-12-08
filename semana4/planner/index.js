

function criarTarefa(){
    let tarefa = document.getElementById('tarefa')
    valueTarefa = tarefa.value

    let diaDaSemana = document.getElementById('dias-semana')
    valueSemana = diaDaSemana.value

    if (tarefa.value) {
        console.log(valueTarefa)
        console.log(valueSemana)

        let container = document.getElementById(valueSemana)
        console.log(container)
        container.innerHTML += `<p class='task-item'>${valueTarefa}</p>`

        tarefa.value =""

        
    } else{
        alert('entre com um valor válido')
    }
  
}

let taskList = document.getElementById('taskContainer')

taskList.addEventListener('click',riskItem)

function riskItem(e){
    console.log(e.target)
    if(e.target.classList.contains('task-item')){
        e.target.classList.toggle('risked')
    }
}

function deleteItem() {
    let semana = ['segunda', 'terca','quarta', 'quinta', 'sexta', 'sabado', 'domingo']
    for(dia of semana){
        let diaSemana = document.getElementById(dia)
        diaSemana.innerHTML = ""
    }
    
    
  }
  

