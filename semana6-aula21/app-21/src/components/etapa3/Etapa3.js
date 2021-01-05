import React from "react";
import PerguntaAberta from "../perguntaAberta/PerguntaAberta";
import PerguntaOpcoes from "../perguntaOpcoes/PerguntaOpcoes";
import "./etapa3.css";


export default class Etapa1 extends React.Component {
  render() {
    return (
      <div id="etapa1">
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>
        <form>
          <PerguntaAberta
            perguntaAberta={'1. Por que você não terminou um curso de graduação?'}
            idNome={'motivoGraduação'}
            pegarValor={this.pegarValor}
          />
          <PerguntaOpcoes
            perguntaOpcoes={'2. Qual sua escolaridade?'}
            idNome={'escolaridade'}
            opcoes={["Não tenho curso complementar","Curso Técnico", "Curso de idiomas"]}
            pegarValor={this.pegarValor}
            ></PerguntaOpcoes>
        </form>
        <button onClick={() => this.props.irProximaEtapa(1)}>Próxima etapa</button>
      </div>
    );
  }
}