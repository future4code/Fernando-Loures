import React from 'react'
import { useProtectPage } from '../../Hooks/useProtectPage';
import useForm from '../../Hooks/UseForm';
import axios from 'axios';
import { baseUrl } from '../../ApiParameters';
import {ContainerCreate, FormCreate} from './StyleCreate';
import {Buttons, Inputs, Selects, Success, Failed} from '../../Styles/Btns'
import { useState } from 'react/cjs/react.development';

const planets = [
    "Mercúrio", "Vênus", "Terra", "Marte", "Júpiter",
    "Saturno", "Urano", "Netuno", "Plutão", "Éris",
    "Ceres", "Haumea", " Makemake"]

export default function LoginPage() {
    const [message, setMessage] = useState("")
    useProtectPage()
    const [form, onChange, clearFields] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        duration: ""
    })

    const createTrip = (event) => {
        event.preventDefault();
        clearFields()
        trip()
        setMessage('carregando')
    }

    const trip = () => {
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.duration

        }
        axios.post(`${baseUrl}/trips`, body,
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }
        )
            .then((res) => {
                setMessage('success')
            })
            .catch((err) => {
                console.log(err)
                setMessage('failed')
            })
    }

    return (
        <ContainerCreate>
            <h1>Criar Viagem</h1>
            <FormCreate onSubmit={createTrip}>
                <Inputs
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    type={"text"}
                    placeholder={"Nome da viagem"}
                    required
                    pattern={"^.{5,}$"}
                />
                <Selects
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                >
                    {planets.map(plan => {
                        return (
                            <option key={plan} value={plan}>{plan}</option>)
                    })}
                </Selects>
                <Inputs
                    name={"date"}
                    min={"2021-03-01"}
                    value={form.date}
                    onChange={onChange}
                    type={"date"}
                    placeholder={"Data da viagem"}
                    required
                />
                <Inputs
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    type={"text"}
                    placeholder={"Descrição"}
                    pattern={"^.{30,}$"}
                    required
                />
                <Inputs
                    name={"duration"}
                    value={form.duration}
                    onChange={onChange}
                    type={"number"}
                    min={1}
                    placeholder={"Duração em dias"}
                    required
                />
                <Buttons>Criar Viagem</Buttons>
            </FormCreate>
            {message === 'success' && <Success>Viagem cadastrada com sucesso!</Success>}
            {message === 'failed' && <Failed>A viagem não foi processada, tente mais tarde!</Failed>}
            {message === 'carregando' && <p>Carregando ...</p>}
        </ContainerCreate>
    )
}