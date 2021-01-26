import React from 'react'
import Header from '../components/header/Header'
import ListOfMatches from '../components/ListOfMatches/ListOfMatches'

export default function Home(props) {

  return (
    <div className="App">
      <Header
        togglePage={props.togglePage}
        clearMatches ={props.clearMatches}
        getProfilesMatches={props.getProfilesMatches}
      />
      <ListOfMatches
        matches={props.matches}
      />
    </div>
  );
}

