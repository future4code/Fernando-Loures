import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl, aluno } from '../../APIParameters'

export default function Profiles() {
  const [profilesApi, setProfilesApi] = useState([])

  useEffect(() => {
    getProfiles()
  }, [])

  const getProfiles = () => {
    axios.get(`${baseUrl}/${aluno}/person`)
      .then((res) => {
        setProfilesApi(res.data.profile)
      })
      .catch((err) => console.log(err))
  }

  const postMatches = (id, choice) => {
    const body = {
      "id": id,
      "choice": choice
    }
    axios.post(`${baseUrl}/${aluno}/choose-person`, body)
      .then((res) => {
      })
      .catch((err) => console.log(err))
  }

  const onClickFunction = (id, choice) => {
    postMatches(id, choice)
    getProfiles()
  }


  return (
    <div className="App">
      {profilesApi && (
        <div>
          <img src={profilesApi.photo} alt={`imagem ${profilesApi.name}`} />
          <div>nome: {profilesApi.name}</div>
          <div>Idade: {profilesApi.age}</div>
          <div>{profilesApi.bio}</div>
          <div>
            <button onClick={() => onClickFunction(profilesApi.id, true)}>curtir</button>
            <button onClick={() => onClickFunction(profilesApi.id, false)}>não curtir</button>
          </div>
        </div>
      )}
    </div>
  );
}

