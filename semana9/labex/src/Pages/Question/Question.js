import React from 'react'
import {goBackPage, goToHomePage} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";

export default function Question(){
    const history =useHistory()

    return(
    <div>
          <h1>Dúvidas</h1>
        <button onClick={()=>goToHomePage(history)}>voltar ao início</button>
        <button onClick={()=>goBackPage(history)}>voltar</button>

    </div>
    )
}