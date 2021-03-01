import axios from 'axios'
import { useEffect, useState } from 'react'



 const useRequestData = (initialState, url) =>{
    const [data, setData] = useState(initialState)
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        axios.get(url,{
            headers:{
                authorization: token
            }
        })
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{console.log(err)})

    },[url])

    return (data)
}

export default useRequestData