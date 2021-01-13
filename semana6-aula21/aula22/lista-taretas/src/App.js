import React from 'react'
import styled from 'styled-components'
import './App.css'


const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  margin-bottom: 1vh;
  display:flex;

`
const TarefaDiv = styled.div`
/* border: 1px solid red; */
display: flex;
justify-content: space-between;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: 'Texto da tarefa',
        completa: false
      }
    ],
    inputValue: '',
    filtro: '',
    editarId: null,
    procurarValue: "",
    procurarImprime: []
  }

  componentDidUpdate() {
    const tarefas = this.state.tarefas
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  };

  componentDidMount() {
    const novaString = localStorage.getItem("tarefas")
    const novoTarefas = JSON.parse(novaString)

    if (novoTarefas) {
      this.setState({ tarefas: novoTarefas })
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  limparInput = () => {
    this.setState({ inputValue: "" })
  }

  criaTarefa = () => {
    if (this.state.inputValue) {

      let novaTarefa

      if (this.state.editarId === null) {

        novaTarefa = {
          id: Date.now(),
          texto: this.state.inputValue,
          completa: false
        }

        let novoTarefas = this.state.tarefas
        novoTarefas.push(novaTarefa)

      } else {
        novaTarefa = {
          id: this.state.editarId,
          texto: this.state.inputValue,
          completa: false
        }
        this.state.tarefas.map((tarefa) => {
          if (tarefa.id === this.state.editarId) {
            let index = this.state.tarefas.indexOf(tarefa)
            let novoTarefas = this.state.tarefas
            novoTarefas[index] = novaTarefa
            console.log(novoTarefas)
          }
        })
        console.log(this.state.tarefas)
      }
      this.limparInput()
      this.setState({ editarId: null })
    }
  }

  selectTarefa = (id) => {
    this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa
        this.setState({ tarefas: this.state.tarefas })
      }
    })
  }

  editarTarefa = (id) => {

    this.setState({ editarId: id })

    this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        this.setState({ inputValue: tarefa.texto })

      }
    })
  }



  removerTarefa = (id) => {
    console.log(id)
    this.state.tarefas.map((tarefa) => {
      // console.log(tarefa.id)
      if (tarefa.id === id) {
        let index = this.state.tarefas.indexOf(tarefa)
        this.state.tarefas.splice(index, 1)
        this.setState({ tarefas: this.state.tarefas })
      }
    })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  apagarTodasTarefas = () => {
    this.setState({ tarefas: [] })
  }

  aoMudarProcurar = (event) => {
    this.setState({ procurarValue: event.target.value })

    let texto = this.state.procurarValue

    let lista = []
    this.state.tarefas.map(tarefa => {
      
      if (tarefa.texto.search(texto) !== -1) {
        lista.push(tarefa.texto)
      }
    })
    console.log(lista)
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })


    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input onChange={this.onChangeInput} value={this.state.inputValue} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
          <label>Procurar</label>
          <input onChange={this.aoMudarProcurar} value={this.state.procurarValue} />
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <TarefaDiv>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                  onDoubleClick={() => this.removerTarefa(tarefa.id)}
                >
                  <div>{ tarefa.texto}</div>

                </Tarefa>
                <button onClick={() => this.editarTarefa(tarefa.id)}> editar</button>
              </TarefaDiv>
            )
          })}

          <button onClick={this.apagarTodasTarefas}>Apagar tarefas</button>

        </TarefaList>
      </div>
    )
  }
}

export default App
