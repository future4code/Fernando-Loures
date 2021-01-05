import React from "react";
import PerguntaAberta from "../perguntaAberta/PerguntaAberta";
import "./etapa2.css";



export default class Etapa2 extends React.Component {
  render() {
    return (
      <div id="etapa2">
        <h1>Etapa 2 - Informações do ensino superior</h1>
        <form>
          <PerguntaAberta
            perguntaAberta={'1. Qual seu curso?'}
            idNome={'curso'}
            pegarValor={this.pegarValor}
          />
          <PerguntaAberta
            perguntaAberta={'2. Qual sua unidade de ensino?'}
            idNome={'unidade'}
            pegarValor={this.pegarValor}
          />
        </form>
        <button onClick={() => this.props.irProximaEtapa(1)}>Próxima etapa</button>
      </div>
    );
  }
}