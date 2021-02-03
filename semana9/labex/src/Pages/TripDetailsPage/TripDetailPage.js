import React, { useEffect, useState } from 'react'
import { goToAplica, goToQuestion, goBackPage } from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import { useProtectPage } from '../../Hooks/useProtectPage';
import axios from 'axios'
import { baseUrl } from '../../ApiParameters';


export default function TripDetailsPage() {
    const [trip, setTrip] = useState()
    const history = useHistory()
    useProtectPage()

    useEffect(() => {
        getLocal()
    }, [])

    const getLocal = () => {
        const id = localStorage.getItem('tripId')

        axios.get(`${baseUrl}/trip/${id}`,
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then((res) => {
                console.log(res.data.trip)
                setTrip(res.data.trip)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <h1>Detalhes da viagem</h1>
            <div>
                <h4>{trip && trip.name}</h4>
                <p>{trip && trip.description}</p>
                <p>{trip && trip.planet}</p>
                <p>{trip && trip.durationInDays}</p>
                <p>{trip && trip.date}</p>
            </div>
            <div>
                <h4>Candidatos:</h4>
                {trip && trip.candidates.map(candidate => {
                    return (
                        <ul>
                            <li>Nome: {candidate.name}</li>
                            <li>Profissão: {candidate.profession}</li>
                            <li>País: {candidate.country}</li>
                            <li>Idade: {candidate.age}</li>
                            <li>Texto de aplicação: {candidate.applicationText}</li>
                        </ul>
                    )
                })}
                <h4>Aprovados:</h4>
                <ul>
                    {trip && trip.approved.map(candidateApproved => {
                        return (
                            <li>Nome: {candidateApproved}</li>
                        )
                    })}
                </ul>
            </div>


            <hr></hr>
            <button onClick={() => goToAplica(history)}>Confirmar aplicação.</button>
            <button onClick={() => goToQuestion(history)}>Dúvidas</button>
            <button onClick={() => goBackPage(history)}>voltar</button>

        </div>
    )
}
