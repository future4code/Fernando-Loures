import React from 'react'
import { goToListTripsPage, goToLoginPage, goToTripDetail } from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import { ContainerHome, Subtitle, H} from './StyleHome'
import {Buttons} from '../../Styles/Btns'

export default function HomePage() {
    const history = useHistory()
    const token = localStorage.getItem("token")
    return (
        <ContainerHome>
            <H>LABEX - Viagens Intergalácticas</H>
            <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut ante nec ex elementum elementum.
                Duis condimentum,
                massa eget bibendum sagittis, sapien metus molestie ligula, eget scelerisque ipsum nisl ac ligula.
        </Subtitle>
            <div>
                <Buttons onClick={() => goToListTripsPage(history)}>Lista de viagens</Buttons>
                {token ?
                    <Buttons onClick={() => goToTripDetail(history)}>Detalhes das Viagens</Buttons> :
                    <Buttons onClick={() => goToLoginPage(history)}>Fazer Login</Buttons>
                }
            </div>

        </ContainerHome>
    )
}