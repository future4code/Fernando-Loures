import React from 'react'
import {ListProfile, ListImg, ListContainer, Container, TextMessage} from './styleList'


export default function ListOfMatches(props) {


    return (
        <Container>
            {props.matches.map(match => {
                return (
                    <ListContainer key={match.id}>
                        <ListProfile>
                            <ListImg src={match.photo} alt={`imagem ${match.name}`} />
                            <div>nome: {match.name}</div>
                            <div>Idade: {match.age}</div>
                        </ListProfile>
                    </ListContainer>
                )
            })
            }
            {props.matches.length === 0 && <TextMessage>Não há matches no seu perfil.</TextMessage>}
        </Container>
    );
}


