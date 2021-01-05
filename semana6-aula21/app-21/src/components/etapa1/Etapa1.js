import React from "react";
import "./etapa1.css";
import PerguntaAberta from "../perguntaAberta/PerguntaAberta";
import PerguntaOpcoes from "../perguntaOpcoes/PerguntaOpcoes";
import Final from "../final/final";
// import PerguntaFechada from "../PerguntaFechada/PerguntaFechada";

export default class Etapa1 extends React.Component {
  state={
    nome: "",
    idade: "",
    email: "",
    escolaridade: "Ensino médio incompleto"
  }

  pegarValor = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    console.log(event.target.value)
  }
  
  responderEnsinoSuperior = () =>{
    
    if(this.state.escolaridade ==="Ensino superior completo"){
      this.props.irProximaEtapa()
      console.log(this.state.escolaridade)
    }else if(this.state.escolaridade ==="Ensino superior incompleto"){
      this.props.irProximaEtapa(2)
      console.log(this.state.escolaridade)
    }else{
      this.props.irProximaEtapa(3)
      console.log(this.state.escolaridade)
    }
  }

  render() {
    return (
      <div id="etapa1">
        <h1>Etapa 1 - Dados Gerais</h1>
        <form>
          <PerguntaAberta
            perguntaAberta={'1. Qual seu nome?'}
            idNome={'nome'}
            pegarValor = {this.pegarValor}
          />
          <PerguntaAberta
            perguntaAberta={'2. Qual sua idade?'}
            idNome={'idade'}
            pegarValor ={this.pegarValor}
          />
          <PerguntaAberta
            perguntaAberta={'3. Qual seu e-mail?'}
            idNome={'email'}
            pegarValor = {this.pegarValor}
          />
          <PerguntaOpcoes
            perguntaOpcoes={'4. Qual sua escolaridade?'}
            idNome={'escolaridade'}
            opcoes={["Ensino médio incompleto", "Ensino médio completo", "Ensino superior incompleto", "Ensino superior completo"]}
            pegarValor ={this.pegarValor}
/>
        </form>
        <button onClick={this.responderEnsinoSuperior}>Próxima etapa</button>
      </div>
    );
  }
}