import axios from  'axios'
import {URL_BASE} from '../Constants/url'
import {goToFeed, goToPost} from '../Router/Coordinator'

export const login = (body,clear,history,setRightButton, setIsLoading) =>{
    setIsLoading(true)
    
    axios.post(`${URL_BASE}/login`,body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
        setRightButton("Logout")
        setIsLoading(false)
    })
    .catch((err)=>{
        setIsLoading(false)
        alert(err.response.data.message)})
}

export const signUpUser = (body,clear, history, setRightButton, setIsLoading) =>{
    setIsLoading(true)

    axios.post(`${URL_BASE}/signup`,body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
        setRightButton("Logout")
        setIsLoading(false)
    })
    .catch((err)=>{
        setIsLoading(false)
        alert(err.response.data.message)
    })
}



export const createPost = (body,clear, history, setIsLoading) =>{
    const token = localStorage.getItem("token")
    setIsLoading(true)
    
    axios.post(`${URL_BASE}/posts`,body, {
        headers:{
            Authorization: token
        }
    })    
    .then((res)=>{
        clear()
        goToFeed(history)
        setIsLoading(false)
    })
    .catch((err)=>{
        alert(err.response.data.message)
        setIsLoading(false)
    })
}

export const createComment = (body,id, clear, history, setIsLoading) =>{
    const token = localStorage.getItem("token")
    setIsLoading(true)

    axios.post(`${URL_BASE}/posts/${id}/comment`,body, {
        headers:{
            Authorization: token
        }
    })
    .then((res)=>{console.log(res)
        clear()
        alert("Comentário criado com sucesso")
        goToPost(history, id)
        setIsLoading(false)
    })
    .catch((err)=>{        
        alert(err.response.data.message)
        setIsLoading(false)

    })
}

