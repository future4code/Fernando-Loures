import React from 'react'

export default function Header(props) {

  // const clear = () =>{
  //   props.clearMatches()
  //   // props.getProfilesMatches()
  // }
  // const pageChange = () =>{
    // props.togglePage()
    // props.getProfilesMatches()

  // }

  return (
    <div >
      <button onClick={props.togglePage}>Mudar de página</button>
      <button onClick={props.clearMatches}>Limpar</button>
    </div>
  );
}


