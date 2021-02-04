import React from 'react'
import { goToHomePage, goBackPage } from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { baseUrl } from '../../ApiParameters'
import { AllCountriesSelect } from '../../Components/AllCountriesSelect/AllCountriesSelect'
import useForm from '../../Hooks/UseForm'
import { useState, useEffect } from 'react';
import { FormApply, ContainerApply } from './StyleAplication';

export default function AplicationFromPage() {
    const history = useHistory()
    const [trips, setTrips] = useState()

    useEffect(() => {
        axios.get(`${baseUrl}/trips`)
            .then((res) => {

                setTrips(res.data.trips)
            })
            .catch((err) => console.log(err))

    }, [])


    const [form, onChange] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        trip: ""
    })
    const applyToTrip = (event) => {
        event.preventDefault();
        console.log(form);

        // const id = localStorage.getItem("tripId")

        // axios.post(`${baseUrl}/trips/${id}/apply`)
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err))
    }

    return (
        <ContainerApply>
            <h1>Aplicar para viagem </h1>
            <FormApply onSubmit={applyToTrip}>
                <input
                    name={"name"}
                    type="text"
                    pattern={"^.{3,}$"}
                    onChange={onChange}
                    value={form.name}
                    placeholder="Nome"
                    required
                />
                <input
                    name={"age"}
                    type="number"
                    min={"18"}
                    onChange={onChange}
                    value={form.age}
                    placeholder="idade"
                    required
                />
                <input
                    name={"applicationText"}
                    type="text"
                    pattern={"^.{30,}$"}
                    onChange={onChange}
                    value={form.applicationText}
                    placeholder="Texto para aplicação"
                    required
                />
                <input
                    name={"profession"}
                    type="text"
                    pattern={"^.{10,}$"}
                    onChange={onChange}
                    value={form.profession}
                    placeholder="Profissão"
                    required
                />
                {AllCountriesSelect(onChange, form.country)}
                <select name={"trip"} onChange={onChange} value={form.trip}>
                    {trips && trips.map(trip => {
                        return (
                            <option key={trip.id} value={trip.id}>
                                {trip.name} - {trip.planet}
                            </option>
                        )
                    })}
                </select>
                <button >Aplicar para Viagem</button>
            </FormApply>
        </ContainerApply>
    )
}