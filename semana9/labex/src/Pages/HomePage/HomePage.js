import React from 'react'
import {goToListTripsPage, goToLoginPage, goToQuestion, goToTripDetail} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";


export default function HomePage(){
    const history = useHistory()
    return(
    <div>
        <h1>HomePage</h1>
        <button onClick={()=>goToListTripsPage(history)}>Ver lista</button>
        <button onClick={()=>goToLoginPage(history)}>Fazer Login</button>
        <button onClick={()=>goToQuestion(history)}>Dúvidas</button>
        <button onClick={()=>goToTripDetail(history)}>Detalhes da Viagem</button>


    </div>
    )
}