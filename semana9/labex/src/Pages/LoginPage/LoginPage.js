import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import useForm from '../../Hooks/UseForm'
import { baseUrl } from '../../ApiParameters';
import {ContainerLogin} from './StyleLogin'
import {FormLogin} from './StyleLogin'
import {Buttons, Failed, Inputs} from '../../Styles/Btns' 
import { goToSignUp } from '../../Router/Coordinator';


export default function LoginPage() {
    const history = useHistory()
    const [message, setMessage] = useState()

    const [form, onChange, clearFields] = useForm({ email: "", password: "" });
    
    const handleClick = (event) => {
        event.preventDefault()
        login(form.email, form.password)
        clearFields()
        setMessage('carregando')
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            history.push("/")
        }
    }, [history])


    const login = (email, password) => {
        const body = {
            email: email,
            password: password
        }

        axios.post(`${baseUrl}/login`, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                history.push("/trips/create")
            }).catch((err) => {
                console.log(err)
                setMessage("wrong")
            })
    }

    return (
        <ContainerLogin>
            <h1>Página de Login</h1>
            <FormLogin onSubmit={handleClick}>
                <Inputs
                    name={"email"}
                    type="email"
                    onChange={onChange}
                    value={form.email}
                    placeholder="E-mail"
                    required
                />
                <Inputs
                    name={"password"}
                    type="password"
                    onChange={onChange}
                    value={form.password}
                    placeholder="Password"
                    required 
                />

                <Buttons>Fazer login</Buttons>
            </FormLogin>
            <p>Ou faça o seu cadastro abaixo:</p>
            <Buttons onClick={()=>goToSignUp(history)}>Cadastrar</Buttons>
            {message === 'carregando' && <p>Carregando ...</p>}
            {message === 'wrong' && <Failed>Senha inválida</Failed>}
        </ContainerLogin>
    )
}
// login: teste@gmail.com.br
// password: 123456