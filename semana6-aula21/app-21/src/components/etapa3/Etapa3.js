import React from "react";
import "./etapa3.css";


export default class Etapa1 extends React.Component {
  render() {
    return (
      <div id="etapa1">
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>
        <form>
            <label for="motivoGraduacao">1. Por que você terminou um curso de graduação?</label>
            <textarea id="motivoGraduacao" name="motivoGraduacao" placeholder="Motivo da graduacao"></textarea>
            
            <label for="cursoComplementar">20. Você fez algum curso Complementar?</label>
            <input id="cursoComplementar" name="cursoComplementar" placeholder="Curso complementar"></input>
            
        </form>
        <button onClick={this.props.irProximaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}