import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const ContainerList = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin-top:10vh;
`;

const List= styled.div`
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
    usersList:[],
    idDelete: ''
  }

  componentDidMount(){
    this.listAllUsers()
  }
  componentDidUpdate(){
    // this.listAllUsers()
  }

  listAllUsers = () =>{
      const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
          headers: {
              Authorization: "fernando-silva-epps"
          }
      }).then(response =>{
        // console.log(response.data)
        this.setState({usersList:response.data})
        
      }).catch(error =>{
          console.log(error.message)
      })
  }

  deleteUser = (id, name) =>{

    if(window.confirm(`Tem certeza que quer apagar o usuário ${name}?`)){

    
    const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
          Authorization: "fernando-silva-epps"
      }
  }).then(response =>{
      console.log(response)
      this.listAllUsers()
      alert('O usuário foi deletado.')
  }).catch(error =>{
      console.log(error.message)
      alert('Não foi possível deletar o usuário.')
  })
  }
}


  render() {
    console.log(this.state.usersList)
    const printList = this.state.usersList.map((user) =>{
      return <List>
        <p>{user.name}</p><X onClick={()=>this.deleteUser(user.id, user.name)}>X</X></List>
    })
    return (
      <ContainerList>
        <h1>Usuários Cadastrados:</h1>
        {printList}
      </ContainerList>
    )
  }
}