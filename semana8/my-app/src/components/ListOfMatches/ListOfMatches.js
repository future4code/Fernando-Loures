import React from 'react'


export default function ListOfMatches(props) {
    

    return (
        <div>
            {props.matches.map(match => {
                return (
                    <div key={match.id}>
                        <img src={match.photo} alt={`imagem ${match.name}`} />
                        <div>nome: {match.name}</div>
                        <div>Idade: {match.age}</div>
                    </div>
                )
            }) 
        }
        {props.matches.length ===0 &&<p>Não há matches no seu perfil.</p>}
        </div>
    );
}


