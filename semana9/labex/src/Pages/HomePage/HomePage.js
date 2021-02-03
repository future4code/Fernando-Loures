import React from 'react'
import {goToListTripsPage, goToLoginPage, goToTripDetail} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";


export default function HomePage(){
    const history = useHistory()
    const token = localStorage.getItem("token")
    return(
    <div>
        <h1>HomePage</h1>
        <button onClick={()=>goToListTripsPage(history)}>Lista de viagens</button>
        {token ?
        <button onClick={()=>goToTripDetail(history)}>Detalhes das Viagens</button> :
        <button onClick={()=>goToLoginPage(history)}>Fazer Login</button>
        }
        
    </div>
    )
}