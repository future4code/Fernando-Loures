import React from "react";
import "./etapa1.css";
import PerguntaAberta from "../perguntaAberta/PerguntaAberta";
import PerguntaFechada from "../PerguntaFechada/PerguntaFechada";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div id="etapa1">
        <h1>Etapa 1 - Dados Gerais</h1>
        <form>
            <PerguntaAberta/>
            <PerguntaFechada/>
        </form>
        <button onClick={this.props.irProximaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}