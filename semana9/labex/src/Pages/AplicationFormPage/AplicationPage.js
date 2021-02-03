import React from 'react'
import {goToHomePage, goBackPage} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import { useInput } from '../../Hooks/UseInput';
import axios from 'axios'
import {baseUrl} from '../../ApiParameters'

export default function AplicationFromPage(){
    const [name, handleName] = useInput()
    const [age, handleAge] = useInput()
    const [application, handleApplication ] = useInput()
    const [profession, handleProfession] =useInput()
    const [country, handleCountry] = useInput()

    const history = useHistory()

    const applyToTrip = () =>{
        const id = localStorage.getItem("tripId")

        axios.post(`${baseUrl}/trips/${id}/apply`)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

    return(
    <div>
        <h1>Aplicar para viagem </h1>
        <input type="text" onChange={handleName} value={name} placeholder="Nome" />
        <input type="text" onChange={handleAge} value={age} placeholder="idade" />
        <input type="text" onChange={handleApplication} value={application} placeholder="Texto para aplicação" />
        <input type="text" onChange={handleProfession} value={profession} placeholder="Profissão" />
        <input type="text" onChange={handleCountry} value={country} placeholder="País" />
        <button onClick={applyToTrip}>Aplicar para Viagem</button>
<hr></hr>
        <button onClick={()=>goBackPage(history)}>Lista de viagens</button>
        <button onClick={()=>goToHomePage(history)}>Início.</button>
    </div>
    )
}