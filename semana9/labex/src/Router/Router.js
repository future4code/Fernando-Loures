import React from 'react'
import AplicationPage from '../Pages/AplicationFormPage/AplicationPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import HomePage from '../Pages/HomePage/HomePage'
import ListTripsPage from '../Pages/ListTripsPage/ListTripPage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailPage'
import Question from '../Pages/Question/Question'
import LoginPage from '../Pages/LoginPage/LoginPage'
import Signup from '../Pages/SignUp/SignUp'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import styled from 'styled-components'


const ContainerBrowserRouter = styled.div`
overflow-x: hidden;
width: 100vw;
display:grid;
grid-template-columns: 1fr;
grid-template-rows: 50px 1fr 50px;
min-height:100vh;
background-color: #efebeb;
@media screen and (max-width: 600px) {
    grid-template-rows: 240px 1fr 50px; 
}
`


export default function Router() {
    return (
        <BrowserRouter>
            <ContainerBrowserRouter>


                <Header />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/trips/list">
                        <ListTripsPage />
                    </Route>
                    <Route exact path="/trips/details">
                        <TripDetailsPage />
                    </Route>
                    <Route exact path="/trips/create">
                        <CreateTripPage />
                    </Route>
                    <Route exact path="/aplication-form">
                        <AplicationPage />
                    </Route>
                    <Route exact path="/questions">
                        <Question />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                </Switch>
                <Footer />
            </ContainerBrowserRouter>
        </BrowserRouter>
    )
}