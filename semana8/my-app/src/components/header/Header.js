import React from 'react'

export default function Header(props) {

  const clear = () =>{
    props.clearMatches()
    props.getProfilesMatches()
  }
  const pageChange = () =>{
    props.togglePage()
    props.getProfilesMatches()

  }

  return (
    <div >
      <button onClick={pageChange}>Mudar de página</button>
      <button onClick={clear}>Limpar</button>
    </div>
  );
}


