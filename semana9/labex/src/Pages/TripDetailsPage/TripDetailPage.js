import React, { useEffect, useState } from 'react'
import { useProtectPage } from '../../Hooks/useProtectPage';
import axios from 'axios'
import { baseUrl } from '../../ApiParameters';
import { ContainerDetail, Trip, Div, List, Ul, H, Approve, Repprove, Trip1} from './StyleTrip'



export default function TripDetailsPage() {
    const [trip, setTrip] = useState()
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
                // console.log(res.data.trip)
                setTrip(res.data.trip)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    // https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:tripId/candidates/:candidateId/decide
    const approveRequest = (approvement, idCandidate) =>{
        const body = {
            approve: approvement
        }
        console.log(trip.id, approvement, body, idCandidate)
        axios.put(`${baseUrl}/trips/${trip.id}/candidates/${idCandidate}/decide`, body, {
            headers:{
                auth: localStorage.getItem("token")
            }
        }).then(res=>{
            console.log(res)
            getLocal()
        }).catch(err=>{
            console.log(err)
        })
    }
 
    return (
        <ContainerDetail>
            <H>Detalhes da viagem</H>
            {!trip && <p>Carregando ...</p>}
                <Trip1>
                    <h4>viagem: {trip && trip.name}</h4>
                    <List>
                    <p>Descrição: {trip && trip.description}</p>
                    <p>Planeta: {trip && trip.planet}</p>
                    <p>Duração: {trip && trip.durationInDays} dias.</p>
                    <p>Data: {trip && trip.date}</p>
                    </List>
                </Trip1>
            <Div>
                <Trip>
                    <h4>Candidatos:</h4>
                    {trip && trip.candidates.map(candidate => {
                        return (
                            <Ul key={candidate.id}>
                                <List>Nome: {candidate.name}</List>
                                <List>Profissão: {candidate.profession}</List>
                                <List>País: {candidate.country}</List>
                                <List>Idade: {candidate.age}</List>
                                <List>Texto de aplicação: {candidate.applicationText}</List>
                                <List><Approve onClick={()=>approveRequest(true, candidate.id)}>Aprovar</Approve>
                                <Repprove onClick={()=>approveRequest(false, candidate.id)}>Reprovar</Repprove> </List>
                            </Ul>
                        )
                    })}
                    {trip && (trip.candidates.length ===0 && <p>Não há candidatos para esta viagem.</p>)}
                </Trip>
                <Trip>
                    <h4>Candidatos Aprovados:</h4>
                    <Ul>
                        {trip && trip.approved.map(candidate => {
                            return (<Ul key={candidate.id}>
                                <List>Nome: {candidate.name}</List>
                                <List>Profissão: {candidate.profession}</List>
                                <List>País: {candidate.country}</List>
                                <List>Idade: {candidate.age}</List>
                                <List>Texto de aplicação: {candidate.applicationText}</List>
                            </Ul>)
                        })}
                        {trip && (trip.approved.length ===0 && <p>Não há candidatos aprovados nesta viagem.</p>)}
                    </Ul>
                </Trip>
            </Div>
        </ContainerDetail>
    )
}
