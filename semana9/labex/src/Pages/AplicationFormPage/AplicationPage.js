import React from 'react'
import {goToHomePage, goBackPage} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";

export default function AplicationFromPage(){
    const history = useHistory()
    return(
    <div>
        <h1>Confirmar viagem</h1>
        <button onClick={()=>goBackPage(history)}>voltar</button>
        <button onClick={()=>goToHomePage(history)}>voltar ao início.</button>
    </div>
    )
}