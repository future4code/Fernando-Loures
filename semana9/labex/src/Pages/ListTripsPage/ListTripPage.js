import React, { useEffect, useState } from 'react'
import { goToTripDetail, goToAplica } from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import { baseUrl } from '../../ApiParameters';
import axios from 'axios'
import { ContainerList, Trip, TripsContainer, List } from './StyleTrip';
import { Buttons } from '../../Styles/Btns'


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

    const checkDetails = (id) => {
        goToTripDetail(history)
        localStorage.setItem('tripId', id)
    }

    const applyToTrip = (id) => {
        localStorage.setItem('tripId', id)
        goToAplica(history)
    }


    return (
        <ContainerList>
            <h1>Lista de Viagens</h1>
            <TripsContainer>
                {!trips && <p>Carregando ...</p>}
                {trips && trips.map(trip => {
                    return (
                        <Trip key={trip.id}>
                            <List>Viagem: {trip.name}</List>
                            <List>Descrição: {trip.description}</List>
                            <List>Planeta: {trip.planet}</List>
                            <List>Duração da Viagem: {trip.durationInDays} dias</List>
                            <List>Data de início: {trip.date}</List>
                            <List>
                                <Buttons onClick={() => checkDetails(trip.id)}>Ver detalhes</Buttons>
                                <Buttons onClick={() => applyToTrip(trip.id)}>Aplicar para viagem</Buttons>
                            </List>
                        </Trip>
                    )
                })}
            </TripsContainer>
        </ContainerList>
    )
}