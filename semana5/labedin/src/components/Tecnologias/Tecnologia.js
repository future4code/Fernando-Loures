import React from 'react';
import './Tecnologia.css'

function Tecnologia(props) {
    return (
      <li className="tecnologia">{ props.tecnologia }  {props.nivel}.</li>

    )
}

export default Tecnologia;