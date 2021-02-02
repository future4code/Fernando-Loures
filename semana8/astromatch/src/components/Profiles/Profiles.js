import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl, aluno } from '../../APIParameters'
import { ProfileContainer, ImgMatch,  Img, ImgNoMatch, Btns, Main, P, Heart, OverHeart, NextMatch, ProfileText} from './ProfileStyeld'
import Fab from '@material-ui/core/Fab';


export default function Profiles() {
  const [profilesApi, setProfilesApi] = useState([])
  const [choiceMatch, setChoiceMatch] = useState("")

  useEffect(() => {
    getProfiles()
    // setChoiceMatch('')
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

  const onClickFunction = (id, choice, opinion) => {
    setChoiceMatch(opinion)
    console.log(choiceMatch)
    postMatches(id, choice)
    getProfiles()
    clearOpinion()
  }
  const clearOpinion = () =>{
    setTimeout(()=>setChoiceMatch(""), 1000) 
  }
  return (
    <ProfileContainer>
      {profilesApi && (
        <Main>
          {choiceMatch === 'match' ?
           <ImgMatch src={profilesApi.photo} alt={`imagem ${profilesApi.name}`} /> :
           (choiceMatch === 'noMatch' ? <ImgNoMatch src={profilesApi.photo} alt={`imagem ${profilesApi.name}`} /> :
           <Img src={profilesApi.photo} alt={`imagem ${profilesApi.name}`} />)
          }

          <ProfileText>
            <P>{profilesApi.name}, {profilesApi.age}</P>
            <P>{profilesApi.bio}</P>
          </ProfileText>

          <Btns>

            <OverHeart aria-label="like">
              <Heart style={{ fontSize: 40 }} onClick={() => onClickFunction(profilesApi.id, true, 'match')} />
            </OverHeart>
            <Fab>
              <NextMatch style={{ fontSize: 40 }} onClick={() => onClickFunction(profilesApi.id, false, 'noMatch')} />
            </Fab>

          </Btns>
        </Main>
      )}
    </ProfileContainer>
  );
}

