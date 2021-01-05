import React from "react";
import "./perguntaFechada.css";


export default class PerguntaFechada extends React.Component {
    render() {
        return (
            <div id="pergunta-fechada">
                <label for="email">1. Qual seu e-mail?</label>
                <input id="email" name="email" placeholder="e-mail"></input>

                <label for="escolaridade">1. Qual sua escolaridade</label>
                <input id="escolaridade" name="escolaridade" placeholder="escolaridade"></input>
            </div>
        );
    }
}