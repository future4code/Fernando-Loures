import React from 'react';
import './CardPequeno.css';

function CardPequeno(props){
    return(
      <div className="card-pequeno">
          <img src={props.icone}/>
          <p>
              {props.textoCard}
          </p>
      </div>
    )
}
export default CardPequeno;