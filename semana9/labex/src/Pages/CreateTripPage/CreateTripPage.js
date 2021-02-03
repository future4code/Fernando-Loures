import React from 'react'
import {goToHomePage, goBackPage} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import { useProtectPage } from '../../Hooks/useProtectPage';

export default function LoginPage(){
    const history = useHistory()
    useProtectPage()
    return(
    <div>
        <h1>Criar Viagem</h1>
        <button onClick={()=>goToHomePage(history)}>Home</button>
        <button onClick={()=>goBackPage(history)}>voltar</button>
    </div>
    )
}