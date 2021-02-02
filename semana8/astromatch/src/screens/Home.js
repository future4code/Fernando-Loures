import React from 'react'
import Profiles from '../components/Profiles/Profiles'
import Header from '../components/header/Header'

export default function Home(props) {
  return (
    <div className="App">
      <Header
        togglePage={props.togglePage}
        clearMatches ={props.clearMatches}
        pageHome={props.pageHome}
      />
      <Profiles

      />
    </div>
  );
}

