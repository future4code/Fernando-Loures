import React from "react";
import "./perguntaOpcoes.css";


export default class PerguntaOpcoes extends React.Component {


    render() {
        return (
            <div id="pergunta-opcoes">
                <label for={this.props.idNome}>{this.props.perguntaOpcoes}</label>
                <select id={this.props.idNome} name={this.props.idNome}>
                    {this.props.opcoes.map((option) =>{
                        return <option value ={option}>{option}</option>
                    })}
                </select>
                
            </div>
        );
    }
}