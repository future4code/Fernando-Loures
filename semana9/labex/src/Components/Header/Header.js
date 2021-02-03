import React from 'react'
import {HeaderContainer, Nav, Links, Logo} from './Style'

export default function Header(){
    return(
    <HeaderContainer>
        <Logo>
            LABEX
        </Logo>
        <Nav>
            <Links>Home</Links>
            <Links>Lista de viagens</Links>
            <Links>Login</Links>
            <Links>Dúvidas</Links>
        </Nav>
    </HeaderContainer>
    )
}