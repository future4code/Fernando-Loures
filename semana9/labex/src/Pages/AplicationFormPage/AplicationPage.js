import React from 'react'
import axios from 'axios'
import { baseUrl } from '../../ApiParameters'
import { AllCountriesSelect } from '../../Components/AllCountriesSelect/AllCountriesSelect'
import useForm from '../../Hooks/UseForm'
import { useState, useEffect } from 'react';
import { FormApply, ContainerApply } from './StyleAplication';
import { Buttons, Inputs, Selects, Success, Failed } from '../../Styles/Btns'


export default function AplicationFromPage() {
    const [trips, setTrips] = useState()
    const [message, setMessage] = useState()

    useEffect(() => {
        axios.get(`${baseUrl}/trips`)
            .then((res) => {

                setTrips(res.data.trips)
            })
            .catch((err) => console.log(err))

    }, [])


    const [form, onChange, clearFields] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        trip: ""
    })
    const applyToTrip = (event) => {
        event.preventDefault();
        clearFields()
        application()
        setMessage('carregando')
    }


    const application = () => {
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        axios.post(`${baseUrl}/trips/${form.trip}/apply`, body)
            .then((res) => {
                
                setMessage('success')
            })
            .catch((err) => {
                console.log(err)
                setMessage('fault')
            })
    }

    return (
        <ContainerApply>
            <h1>Aplicar para viagem </h1>
            <FormApply onSubmit={applyToTrip}>
                <Inputs
                    name={"name"}
                    type="text"
                    pattern={"^.{3,}$"}
                    onChange={onChange}
                    value={form.name}
                    placeholder="Nome"
                    required
                />
                <Inputs
                    name={"age"}
                    type="number"
                    min={"18"}
                    onChange={onChange}
                    value={form.age}
                    placeholder="idade"
                    required
                />
                <Inputs
                    name={"applicationText"}
                    type="text"
                    pattern={"^.{30,}$"}
                    onChange={onChange}
                    value={form.applicationText}
                    placeholder="Texto para aplicação"
                    required
                />
                <Inputs
                    name={"profession"}
                    type="text"
                    pattern={"^.{10,}$"}
                    onChange={onChange}
                    value={form.profession}
                    placeholder="Profissão"
                    required
                />
                {AllCountriesSelect(onChange, form.country)}
                <Selects name={"trip"} onChange={onChange} value={form.trip}>
                    {trips && trips.map(trip => {
                        return (
                            <option key={trip.id} value={trip.id}>
                                {trip.name} - {trip.planet}
                            </option>
                        )
                    })}
                </Selects>
                <Buttons >Aplicar para Viagem</Buttons>
            </FormApply>
            {message === 'success' && <Success>Aplicação cadastrada com sucesso!</Success>}
            {message === 'fault' && <Failed>Aplicação falhou, tente mais tarde!</Failed>}
            {message === 'carregando' && <p>Carregando ...</p>}
        </ContainerApply>
    )
}