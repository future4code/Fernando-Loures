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
    idDetails: '',
    inputSearch:"",
    showSearchResult: false,
    resultSearch:[]
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
        this.setState({showSearchResult: false})
        alert('O usuário foi deletado.')
      } catch (error) {
        console.log(error.message)
        alert('Não foi possível deletar o usuário.')
      }
    }
  }

  UserDetails = (id = 0) => {
    if (id === 0) {
      this.setState({ detailsPage: !this.state.detailsPage })
      this.listAllUsers()
    } else {
      this.setState({
        detailsPage: !this.state.detailsPage,
        idDetails: id
      })
      this.listAllUsers()
      this.closeSearch()
    }
  }

  handleSearch = (e) =>{
    this.setState({inputSearch: e.target.value})
  }

  searchUser = async () =>{
    try {
      const response = await axios.get(`${urlBase}/search?name=${this.state.inputSearch}&email=`, parameters)
      console.log(response.data[0])
      this.setState({showSearchResult: !this.state.showSearchResult})
      this.setState({resultSearch: response.data[0]})      
      this.setState({inputSearch: ""})
    } catch (error) {
      this.setState({resultSearch: ''})      
      this.setState({inputSearch: ""})
      console.log(error.message)
      alert('Não foi possível encontrar o usuário.')
    }
  }
  closeSearch = () =>{
    this.setState({showSearchResult: false})
    
  }  

  render() {
    const printList = this.state.usersList.map((user) => {
      return <List>
        <p>{user.name}</p><X onClick={() => this.deleteUser(user.id, user.name)}>X</X>
        <button onClick={() => this.UserDetails(user.id)}>Detalhes</button></List>
    })

    const result = (<List>
      <p>{this.state.resultSearch.name}</p><X onClick={() => this.deleteUser(this.state.resultSearch.id, this.state.resultSearch.name)}>X</X>
        <button onClick={() => this.UserDetails(this.state.resultSearch.id)}>Detalhes</button></List>
    
    )

      

    return (
      <ContainerList>
        
        <input type="text" onChange={this.handleSearch} value={this.state.inputSearch}/>
        <button onClick={this.searchUser}>Procurar</button>
        {this.state.showSearchResult && result}

        {!this.state.detailsPage && <h2>Usuários Cadastrados:</h2>}
        {!this.state.detailsPage && printList}

        {this.state.detailsPage && <UserDetails
          idDetails={this.state.idDetails}
          UserDetails={this.UserDetails}
          closeSearch={this.closeSearch}
        />}
      </ContainerList>
    )
  }
}