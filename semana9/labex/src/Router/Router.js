import React from 'react'
import AplicationFromPage from '../Pages/AplicationFromPage/AplicationFromPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import HomePage from '../Pages/HomePage/HomePage'
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage'
import Question from '../Pages/Question'
import { BrowserRouter, Switch, Route } from "react-router-dom"

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/listar-viagens">
                    <ListTripsPage/>
                </Route>
                <Route exact path="/detalhes-viagem">
                    <TripDetailsPage/>
                </Route>
                <Route exact path="/criar-viagem">
                    <CreateTripPage/>
                </Route>
                <Route exact path="/aplicar-para-viagem">
                    <AplicationFromPage/>
                </Route>
                <Route exact path="/canal-de-duvidas">
                    <Question/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}