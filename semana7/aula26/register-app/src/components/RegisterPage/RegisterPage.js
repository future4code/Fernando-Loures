import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import {urlBase} from '../../shortcut';
import {parameters} from '../../shortcut';


const ContainerRegister = styled.div`
display:flex;
justify-content:center;
margin-top:10vh;
`;

const Register = styled.div`
padding:40px;
border:black solid 1px;
`;

const RegisterInput = styled.input`
padding: 5px;
margin: 5px;
`;

const DivButton = styled.div`
display:flex;
justify-content:center;
`;
const RegisterButton = styled.button`
padding: 5px;
margin: 5px;
text-align:center;
background-color: lightgreen;
border-radius: 20%;
font-weight: bold;
`;

export default class RegisterPage extends React.Component {
  state = {
    inputValueNome: "",
    inputValueEmail: "",
  }

  onChangeName = (e) => {
    this.setState({ inputValueNome: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ inputValueEmail: e.target.value })
  }

  registerNewUser = async () => {
    const body = {
      "name": this.state.inputValueNome,
      "email": this.state.inputValueEmail
    }
    try {
      const response = await axios.post(urlBase, body, parameters)
      console.log(response.data)
      alert('Usuário criado com sucesso!')
    } catch (error) {
      console.log(error.resposnse)
      alert('Não foi possível criar o usuário.')      
    }

    this.setState({inputValueEmail: "", inputValueNome: ""})
  }

  render() {
    console.log(this.state.inputValueEmail)
    return (

      <ContainerRegister>
        <Register>
          <div>
            <label>Nome</label>
            <RegisterInput type="text" onChange={this.onChangeName} value={this.state.inputValueNome}/>
          </div>
          <div>
            <label>E-mail</label>
            <RegisterInput type="email" onChange={this.onChangeEmail} value={this.state.inputValueEmail}/>
          </div>
          <DivButton>
            <RegisterButton onClick={this.registerNewUser}>Salvar</RegisterButton>
          </DivButton>
        </Register>

      </ContainerRegister>
    );
  }
}


