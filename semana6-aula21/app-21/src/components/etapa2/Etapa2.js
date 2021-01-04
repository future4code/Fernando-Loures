import React from "react";
import "./etapa2.css";



export default class Etapa2 extends React.Component {
  render() {
    return (
      <div id="etapa2">
        <h1>Etapa 2 - Informações do ensino superior</h1>
        <form>
            <label for="curso">1. Qual seu curso?</label>
            <input id="curso" name="curso" placeholder="curso"></input>
            
            <label for="unidade">1. Qual sua unidade de ensino?</label>
            <input id="unidade" name="unidade" placeholder="unidade"></input>
            
        </form>
        <button onClick={this.props.irProximaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}