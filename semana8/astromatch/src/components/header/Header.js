import React from 'react'
import {HeaderContainer, IconGroup, Clear, H1,H1Color} from  './HeaderStyle'



export default function Header(props) {
  const clear = () =>{
    if(window.confirm('Deseja limpar Matches?')){
      props.clearMatches()
    }
  }

  return (
    <HeaderContainer>
      <Clear style={{ fontSize: 40 }} onClick={clear} />
      <H1><H1Color>ASTRO</H1Color>MATCH</H1>
      {props.pageHome ? <IconGroup style={{ fontSize: 40 }} onClick={props.togglePage}/> :
       <IconGroup style={{ fontSize: 40 }} onClick={props.togglePage}/>}
    </HeaderContainer>
  );
}


