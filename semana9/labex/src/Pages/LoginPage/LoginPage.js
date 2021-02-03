import React, {useEffect} from 'react'
import { goToHomePage, goToCreateTrip, goBackPage } from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import { useInput } from '../../Hooks/UseInput';
import axios from 'axios'


export default function LoginPage() {
    const history = useHistory()
    const [email, handleEmail] = useInput()
    const [password, handlePassword] = useInput()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            history.push("/")
        }
    },[history])


    const login = () => {
        const aluno = "fernando-silva"
        const body = {
            email: email,
            password: password
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`, body)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token)
                goToCreateTrip()
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Página de Login</h1>
            <input type="text" onChange={handleEmail} value={email} placeholder="E-mail" required />
            <input type="password" onChange={handlePassword} value={password} placeholder="Senha"  required/>

            <button onClick={login}>Fazer login</button>
            <hr></hr>

            <button onClick={() => goBackPage(history)}>voltar</button>
            <button onClick={()=>goToHomePage(history)}>Início</button>

        </div>
    )
}
// login: teste@gmail.com.br
// password: 123456