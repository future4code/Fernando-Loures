import React from 'react';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ListPage from './components/ListPage/ListPage';



export default class App extends React.Component {
  state = {
    registerPage: false
  }
  changePage = () =>{
    this.setState({registerPage: !this.state.registerPage})
  }
  render() {
    return (
      <div className="App">
        {this.state.registerPage? 
        <button onClick={this.changePage}>Lista de usuários</button> : 
        <button onClick={this.changePage}>Criar Usuários</button>}


        {this.state.registerPage && <RegisterPage
        registerPage={this.state.registerPage}/>}

        {!this.state.registerPage && <ListPage
          registerPage={this.state.registerPage}
        />}
  
      </div>
    );
  }
}


