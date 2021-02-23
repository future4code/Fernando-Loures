import React, { useState } from 'react'
import axios from 'axios'
import useForm from '../../Hooks/UseForm'
import { baseUrl } from '../../ApiParameters';
import {Buttons, Failed, Inputs, Success} from '../../Styles/Btns' 
import { FormSignUp, ContainerSignUp} from './Style';
import { goBackPage } from '../../Router/Coordinator';
import {useHistory} from 'react-router-dom'

export default function LoginPage() {
    const [message, setMessage] = useState()
    const history =useHistory()
    const [form, onChange, clearFields] = useForm({ email: "", password: "" });

    const handleClick = (event) =>{
        event.preventDefault()
        signUpUser()
        clearFields()
        setMessage('carregando')
    }
    const signUpUser =()=>{
        const body = {
            email: form.email,
            password: form.password
        }

        axios.post(`${baseUrl}/signup`,body)
        .then((res)=>{
            setMessage('success')
        })
        .catch((err)=>{
            console.log(err)
            setMessage('failed')
        })

    }

    return (
        <ContainerSignUp>
            <h1>Cadastro de Usuário</h1>
            <FormSignUp onSubmit={handleClick}>
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

                <Buttons>Cadastrar</Buttons>
            </FormSignUp>
            <Buttons onClick={()=>goBackPage(history)}>Voltar</Buttons>
            {message === 'carregando' && <p>Carregando ...</p>}
            {message === 'success' && <Success>Usuário cadastrado com sucesso! </Success>}
            {message === 'failed' && <Failed>Usuário não cadastrado, tente novamente.</Failed>}
        </ContainerSignUp>
    )
}
