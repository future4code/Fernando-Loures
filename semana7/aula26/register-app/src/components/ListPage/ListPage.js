import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { urlBase } from '../../shortcut';
import { parameters } from '../../shortcut';
import UserDetails from '../UserDetails/UserDetails';

const ContainerList = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin-top:10vh;
`;

const List = styled.div`
border-bottom:black solid 1px;
width: 50vw;
display:flex;
justify-content:space-between;
`;
const X = styled.p`
color:red;
`;

export default class ListPage extends React.Component {
  state = {
    usersList: [],
    idDelete: '',
    detailsPage: false,
    idDetails:'',
  }

  componentDidMount() {
    this.listAllUsers()
  }

  listAllUsers = async () => {
    try {
      const response = await axios.get(urlBase, parameters)
      this.setState({ usersList: response.data })
    } catch (error) {
      console.log(error.message)
    }
  }

  deleteUser = async (id, name) => {
    if (window.confirm(`Tem certeza que quer apagar o usuário ${name}?`)) {
      try {
        const response = await axios.delete(`${urlBase}/${id}`, parameters)
        console.log(response)
        this.listAllUsers()
        alert('O usuário foi deletado.')
      } catch (error) {
        console.log(error.message)
        alert('Não foi possível deletar o usuário.')
      }
    }
  }

  UserDetails = (id = 0) =>{
    if(id ===0){
      this.setState({detailsPage: !this.state.detailsPage })
      this.listAllUsers()
    }else{
      this.setState({detailsPage: !this.state.detailsPage,
                    idDetails: id})
    }


  }


  render() {
    console.log(this.state.usersList)
    const printList = this.state.usersList.map((user) => {
      return <List>
        <p>{user.name}</p><X onClick={() => this.deleteUser(user.id, user.name)}>X</X> 
        <button onClick={() => this.UserDetails(user.id)}>Detalhes</button></List>
    })
    console.log(this.state.emailDetails)
    return (
      <ContainerList>
        {!this.state.detailsPage &&<h2>Usuários Cadastrados:</h2>}
        {!this.state.detailsPage && printList}

        {this.state.detailsPage && <UserDetails
          idDetails= {this.state.idDetails}
          UserDetails = {this.UserDetails}
        />}
      </ContainerList>
    )
  }
}