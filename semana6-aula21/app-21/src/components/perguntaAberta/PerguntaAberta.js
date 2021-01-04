import React from "react";
import "./perguntaAberta.css";


export default class PerguntaAberta extends React.Component {
    render() {
        return (
            <div id="pergunta-aberta">
                <label for="nome">1. Qual seu nome?</label>
                <input id="nome" name="nome" placeholder="nome"></input>

                <label for="idade">1. Qual sua idade?</label>
                <input id="idade" name="idade" placeholder="idade"></input>
            </div>
        );
    }
}