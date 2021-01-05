import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'



const EstiloInput = styled.input`
  padding: 10px;
  width: 50vw;
  border: blue solid 1px;
  border-radius: 5px;
  margin: 1vh 0;
 `
const EstiloBotao = styled.button`
padding: 10px 20px;
border: blue solid 1px;
border-radius: 5px;
margin: 1vh 0;
background-color:blue;
color:white;
`

const EstiloDivPost = styled.div`
border: blue solid 1px;
border-radius: 10%;
margin: 1vh 0;
color:white;
background-color:lightblue;
`



class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'José',
        fotoUsuario: 'https://picsum.photos/id/1/200/300',
        fotoPost: 'https://picsum.photos/id/2/200/150'
      },
      {
        nomeUsuario: 'Maria',
        fotoUsuario: 'https://picsum.photos/id/3/200/300',
        fotoPost: 'https://picsum.photos/id/4/200/150'
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novosPostes = [... this.state.pessoas, novoPost]

    this.setState({ pessoas: novosPostes })
  }

  onChangeNomeUsuario = (e) => {
    this.setState({ valorInputNomeUsuario: e.target.value })
  }

  onChangeFotoUsuario = (e) => {
    this.setState({ valorInputFotoUsuario: e.target.value })
  }

  onChangeFotoPost = (e) => {
    this.setState({ valorInputFotoPost: e.target.value })
  }
  
 

  render() {
    const postsUsuarios = this.state.pessoas.map((postUsuario) => {
      return <EstiloDivPost>
        <Post
          nomeUsuario={postUsuario.nomeUsuario}
          fotoUsuario={postUsuario.fotoUsuario}
          fotoPost={postUsuario.fotoPost}
        />
      </EstiloDivPost>
    })

    return (
      
      <div className={'app-container'}>
        
        <EstiloInput
          value={this.valorInputNomeUsuario}
          onChange={this.onChangeNomeUsuario}
          placeholder={"Nome Usuário"}
        ></EstiloInput>

        <EstiloInput
          value={this.valorInputFotoUsuario}
          onChange={this.onChangeFotoUsuario}
          placeholder={"Foto Usuário"}
        ></EstiloInput>

        <EstiloInput
          value={this.valorInputFotoPost}
          onChange={this.onChangeFotoPost}
          placeholder={"Foto Post"}
        ></EstiloInput>
        <EstiloBotao 
          onClick={this.adicionarPost}
        >Criar Post</EstiloBotao>

        {postsUsuarios}

      </div>
    );
  }
}

export default App;
