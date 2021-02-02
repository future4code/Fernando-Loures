import React from 'react'
import {goToHomePage, goBackPage} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";

export default function LoginPage(){
    const history = useHistory()

    return(
    <div>
        <h1>Criar Viagem</h1>
        <button onClick={()=>goToHomePage(history)}>Home</button>
        <button onClick={()=>goBackPage(history)}>voltar</button>
    </div>
    )
}