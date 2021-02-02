import React from 'react'
import {goToLoginPage, goToQuestion, goBackPage} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";

export default function TripDetailsPage(){
    const history = useHistory()

    return(
    <div>
        <h1>Detalhes da viagem</h1>
        <button onClick={()=>goToLoginPage(history)}>Selecionar Viagem</button>
        <button onClick={()=>goToQuestion(history)}>Dúvidas</button>
        <button onClick={()=>goBackPage(history)}>voltar</button>

    </div>
    )
}