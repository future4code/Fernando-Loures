import React, { useEffect, useState } from 'react'
import { goToTripDetail, goToHomePage, goToAplica } from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import { baseUrl } from '../../ApiParameters';
import axios from 'axios'

export default function ListTripsPage() {
    const [trips, setTrips] = useState()
    const history = useHistory()

    useEffect(() => {
        axios.get(`${baseUrl}/trips`)
            .then((res) => {
                
                setTrips(res.data.trips)
            })
            .catch((err) => console.log(err))

    }, [])

    const checkDetails =(id)=>{
        goToTripDetail(history)
        localStorage.setItem('tripId', id )
    }

    const applyToTrip = (id) =>{
        localStorage.setItem('tripId', id )
        goToAplica(history)
    }


    return (
        <div>
            <h1>Lista de Viagens</h1>
            <div>
                {trips && trips.map(trip=>{
                    return(
                    <div key={trip.id}>
                        <h4>{trip.name}</h4>
                        <p>{trip.description}</p>
                        <p>{trip.planet}</p>
                        <p>{trip.durationInDays}</p>
                        <p>{trip.date}</p>
                        <button onClick={() => checkDetails(trip.id)}>Ver detalhes</button>
                        <button onClick={() => applyToTrip(trip.id)}>Aplicar para viagem</button>
                    </div>)
                })}
            </div>
<hr></hr>
            <button onClick={() => goToHomePage(history)}>Início</button>
        </div>
    )
}