import Home from '../screens/Home'
import MatchesList from '../screens/MathcesList'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl, aluno } from '../APIParameters'
import {Container} from './AppContainerStyled'

export default function AppContainer() {
  const [pageHome, setPageHome] = useState(true)
  const [matches, setMatches] = useState([])


  useEffect(() => {
    getProfilesMatches()
  }, [pageHome])

  const clearMatches = () => {
    axios.put(`${baseUrl}/${aluno}/clear`)
      .then((res) => {
        getProfilesMatches()
      })
      .catch((err) => console.log(err))
  }

  const getProfilesMatches = () => {
    axios.get(`${baseUrl}/${aluno}/matches`)
      .then((res) => {
        setMatches(res.data.matches)
      })
      .catch((err) => console.log(err))
  }

  const togglePage = () => {
    setPageHome(!pageHome)
  }
  return (
    <Container>
      { pageHome ?
        <Home
          clearMatches={clearMatches}
          togglePage={togglePage}
          pageHome={pageHome}
        /> :
        <MatchesList
          clearMatches={clearMatches}
          togglePage={togglePage}
          matches={matches}
          pageHome={pageHome}
        />
      }
    </Container>
  );
}

