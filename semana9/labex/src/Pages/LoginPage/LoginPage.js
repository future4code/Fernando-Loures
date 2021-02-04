import React, { useEffect } from 'react'
import { goToCreateTrip } from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import useForm from '../../Hooks/UseForm'
import { baseUrl } from '../../ApiParameters';
import {ContainerLogin} from './StyleLogin'
import {FormLogin} from './StyleLogin'

export default function LoginPage() {
    const history = useHistory()

    const [form, onChange, clearFields] = useForm({ email: "", password: "" });
    
    const handleClick = (event) => {
        event.preventDefault()
        login(form.email, form.password)
        clearFields()
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            history.push("/trips/create")
        }
    }, [history])


    const login = (email, password) => {
        const body = {
            email: email,
            password: password
        }

        axios.post(`${baseUrl}/login`, body)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token)
                goToCreateTrip()
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <ContainerLogin>
            <h1>Página de Login</h1>
            <FormLogin onSubmit={handleClick}>
                <input
                    name={"email"}
                    type="email"
                    onChange={onChange}
                    value={form.email}
                    placeholder="E-mail"
                    required
                />
                <input
                    name={"password"}
                    type="password"
                    onChange={onChange}
                    value={form.password}
                    placeholder="Password"
                    required 
                />

                <button>Fazer login</button>
            </FormLogin>



        </ContainerLogin>
    )
}
// login: teste@gmail.com.br
// password: 123456