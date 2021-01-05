import React from "react";
import "./etapa1.css";
import PerguntaAberta from "../perguntaAberta/PerguntaAberta";
import PerguntaOpcoes from "../perguntaOpcoes/PerguntaOpcoes";
// import PerguntaFechada from "../PerguntaFechada/PerguntaFechada";

export default class Etapa1 extends React.Component {
 
  render() {
    return (
      <div id="etapa1">
        <h1>Etapa 1 - Dados Gerais</h1>
        <form>
          <PerguntaAberta
            perguntaAberta={'Qual seu nome?'}
            idNome={'nome'}
          />
          <PerguntaAberta
            perguntaAberta={'Qual sua idade?'}
            idNome={'idade'}
          />
          <PerguntaAberta
            perguntaAberta={'Qual seu e-mail?'}
            idNome={'email'}
          />
          <PerguntaOpcoes
            perguntaOpcoes={'Qual sua escolaridade?'}
            idNome={'escolaridade'}
            opcoes={["Ensino médio incompleto", "Ensino médio completo", "Ensino superior incompleto", "Ensino superior completo"]}
            proximaEtapa = {this.props.irProximaEtapa}
/>
        </form>
        <button onClick={this.props.irProximaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}