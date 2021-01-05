import React from "react";
import "./perguntaAberta.css";


export default class PerguntaAberta extends React.Component {
    
    render() {
        return (
            <div id="pergunta-aberta">
                <label for={this.props.idNome}>{this.props.perguntaAberta}</label>
                <input id={this.props.idNome} name={this.props.idNome}></input>
            </div>
        );
    }
}