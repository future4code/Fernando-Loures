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
`

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
    filtro: ''
  }

  componentDidUpdate() {
    const tarefas = this.state.tarefas
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  };

  componentDidMount() {
    const novaString = localStorage.getItem("tarefas")
    const novoTarefas = JSON.parse(novaString)

    if (novoTarefas){
      this.setState({tarefas:novoTarefas})
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

      let novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      }
      // console.log(novaTarefa)

      let novoTarefas = this.state.tarefas
      novoTarefas.push(novaTarefa)
      // console.log(this.state.tarefas)

      this.limparInput()
    }
  }

  selectTarefa = (id) => {
    this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa
      }
    })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
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
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
