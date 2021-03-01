import axios from  'axios'

export const newVote = (url, body, history) =>{
    const token = localStorage.getItem("token")
    axios.put(url, body, {
        headers:{
            Authorization: token
        }
    })
    .then(()=>{
        alert("Voto salvo")
    })
    .catch((err)=>{console.log(err.message)})
}
