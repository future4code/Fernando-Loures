import React from 'react'
import { goToCreateTrip, goToHomePage, goToListTripsPage, goToLoginPage, goToQuestion } from '../../Router/Coordinator'
import {HeaderContainer, Nav, Links, Logo} from './Style'
import { useHistory } from "react-router-dom";


export default function Header(){
    const history = useHistory()
    const exit = ()=>{
        localStorage.setItem("token","")
        goToHomePage(history)
    }
    return(
    <HeaderContainer>
        <Logo onClick={()=>goToHomePage(history)}>
            LABEX
        </Logo>
        <Nav>
            <Links onClick={()=>goToHomePage(history)}>Home</Links>
            <Links onClick={()=>goToListTripsPage(history)}>Lista de viagens</Links>
            <Links onClick={()=>goToLoginPage(history)}>Login</Links>
            <Links onClick={()=>goToCreateTrip(history)}>Criar Viagem</Links>
            <Links onClick={()=>goToQuestion(history)}>Dúvidas</Links>
            <Links onClick={exit}>Sair</Links>
            

        </Nav>
    </HeaderContainer>
    )
}