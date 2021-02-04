import React from 'react'
import { goToListTripsPage, goToLoginPage, goToTripDetail } from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import { ContainerHome, Subtitle } from './StyleHome'

export default function HomePage() {
    const history = useHistory()
    const token = localStorage.getItem("token")
    return (
        <ContainerHome>
            <h1>HomePage</h1>
            <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut ante nec ex elementum elementum.
                Duis condimentum,
                massa eget bibendum sagittis, sapien metus molestie ligula, eget scelerisque ipsum nisl ac ligula.
        </Subtitle>
            <div>
                <button onClick={() => goToListTripsPage(history)}>Lista de viagens</button>
                {token ?
                    <button onClick={() => goToTripDetail(history)}>Detalhes das Viagens</button> :
                    <button onClick={() => goToLoginPage(history)}>Fazer Login</button>
                }
            </div>

        </ContainerHome>
    )
}