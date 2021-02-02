import React from 'react'
import AplicationPage from '../Pages/AplicationFromPage/AplicationPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import HomePage from '../Pages/HomePage/HomePage'
import ListTripsPage from '../Pages/ListTripsPage/ListTripPage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailPage'
import Question from '../Pages/Question/Question'
import LoginPage from '../Pages/LoginPage/LoginPage'
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
                    <AplicationPage/>
                </Route>
                <Route exact path="/canal-de-duvidas">
                    <Question/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}