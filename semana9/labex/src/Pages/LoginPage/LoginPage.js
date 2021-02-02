import React from 'react'
import {goToAplica, goToCreateTrip, goBackPage} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";

export default function LoginPage(){
    const history = useHistory()

    return(
    <div>
        <h1>Página de Login</h1>
        <button onClick={()=>goToCreateTrip(history)}>Login como usuário</button>
        <button onClick={()=>goBackPage(history)}>voltar</button>

    </div>
    )
}