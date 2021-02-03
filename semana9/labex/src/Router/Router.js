import React from 'react'
import AplicationPage from '../Pages/AplicationFormPage/AplicationPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import HomePage from '../Pages/HomePage/HomePage'
import ListTripsPage from '../Pages/ListTripsPage/ListTripPage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailPage'
import Question from '../Pages/Question/Question'
import LoginPage from '../Pages/LoginPage/LoginPage'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { BrowserRouter, Switch, Route } from "react-router-dom"

export default function Router(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/trips/list">
                    <ListTripsPage/>
                </Route>
                <Route exact path="/trips/details">
                    <TripDetailsPage/>
                </Route>
                <Route exact path="/trips/create">
                    <CreateTripPage/>
                </Route>
                <Route exact path="/aplication-form">
                    <AplicationPage/>
                </Route>
                <Route exact path="/questions">
                    <Question/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}