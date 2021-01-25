import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {baseUrl, aluno} from '../../APIParameters' 

export default function Profiles() {
    const [profilesApi, setProfilesApi] = useState([])
    const [count, setCount] = useState(0)


    const getProfiles = () =>{
        axios.get(`${baseUrl}/${aluno}/person`)
        .then((res)=>{
            setProfilesApi(res.data.profile)
            console.log(res.data.profile)})
        .catch((err)=>console.log(err))
    }

  return (
    <div className="App">
      {/* {profilesApi.map(profile =>{
          return(<div>
              <img url={profile.photo}/>
          </div>)
      })} */}
    </div>
  );
}

