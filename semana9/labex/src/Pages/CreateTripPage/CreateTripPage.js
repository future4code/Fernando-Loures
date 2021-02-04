import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useProtectPage } from '../../Hooks/useProtectPage';
import useForm from '../../Hooks/UseForm';
import axios from 'axios';
import { baseUrl } from '../../ApiParameters';
import { useEffect } from 'react/cjs/react.development';
import {ContainerCreate, FormCreate} from './StyleCreate'

const planets = [
    "Mercúrio", "Vênus", "Terra", "Marte", "Júpiter",
    "Saturno", "Urano", "Netuno", "Plutão", "Éris",
    "Ceres", "Haumea", " Makemake"]

export default function LoginPage() {
    const [token, setToken] = useState()
    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])


    const history = useHistory()
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
        console.log(form)
        console.log(token)
        clearFields()
        trip()
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
                console.log(res)
            })
            .catch((err) => console.log(err))
    }

    return (
        <ContainerCreate>
            <h1>Criar Viagem</h1>
            <FormCreate onSubmit={createTrip}>
                <input
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    type={"text"}
                    placeholder={"Nome"}
                    required
                    pattern={"^.{5,}$"}
                />
                <select
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                >
                    {planets.map(plan => {
                        return (
                            <option key={plan} value={plan}>{plan}</option>)
                    })}
                </select>
                <input
                    name={"date"}
                    min={"2021-03-01"}
                    value={form.date}
                    onChange={onChange}
                    type={"date"}
                    placeholder={"Data da viagem"}
                    required
                />
                <input
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    type={"text"}
                    placeholder={"Descrição"}
                    pattern={"^.{30,}$"}
                    required
                />
                <input
                    name={"duration"}
                    value={form.duration}
                    onChange={onChange}
                    type={"number"}
                    min={1}
                    placeholder={"Duração em dias"}
                    required
                />
                <button>Criar Viagem</button>
            </FormCreate>
        </ContainerCreate>
    )
}