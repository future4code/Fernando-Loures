import React, { useEffect, useState } from 'react'
import { goToAplica, goToQuestion, goBackPage } from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import { useProtectPage } from '../../Hooks/useProtectPage';
import axios from 'axios'
import { baseUrl } from '../../ApiParameters';
import { ContainerDetail, Trip, Div, List} from './StyleTrip'


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
        <ContainerDetail>
                <h1>Detalhes da viagem</h1>
            
            <div>
                <h4>{trip && trip.name}</h4>
                <p>{trip && trip.description}</p>
                <p>{trip && trip.planet}</p>
                <p>{trip && trip.durationInDays}</p>
                <p>{trip && trip.date}</p>
            </div>
            <Trip>
                <h4>Candidatos:</h4>
                {trip && trip.candidates.map(candidate => {
                    return (
                        <ul>
                            <List>Nome: {candidate.name}</List>
                            <List>Profissão: {candidate.profession}</List>
                            <List>País: {candidate.country}</List>
                            <List>Idade: {candidate.age}</List>
                            <List>Texto de aplicação: {candidate.applicationText}</List>
                        </ul>
                    )
                })}
            </Trip>
            <Trip>
                <h4>Aprovados:</h4>
                <ul>
                    {trip && trip.approved.map(candidateApproved => {
                        return (
                            <li>Nome: {candidateApproved}</li>
                        )
                    })}
                </ul>
            </Trip>
        </ContainerDetail>
    )
}
