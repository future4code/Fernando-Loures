import React from 'react'
import {goToTripDetail, goToQuestion} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";


export default function ListTripsPage(){
    const history = useHistory()

    return(
    <div>
        <h1>Lista de Viagens</h1>
        <button onClick={()=>goToTripDetail(history)}>Detalhes da Viagem</button>
        <button onClick={()=>goToQuestion(history)}>Dúvidas</button>
    </div>
    )
}