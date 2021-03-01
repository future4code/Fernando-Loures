import React from 'react'
import {  Switch, Route} from "react-router-dom"
import Login from '../Pages/Login/Login'
import Feed from '../Pages/Feed/Feed'
import Post from '../Pages/Post/Post'
import Signup from '../Pages/Signup/Signup'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'

export default function Router(props){
    return(
    <div>
        
        <Switch>
            <Route exact path={"/login"}>
                <Login
                    setRightButton = {props.setRightButton}
                />
            </Route>
            <Route exact path={"/"}>
                <Feed/>
            </Route>
            <Route exact path={"/post/:id"}>
                <Post/>
            </Route>
            <Route exact path={"/cadastrar"}>
                <Signup
                    setRightButton = {props.setRightButton}
                />
            </Route>
            <Route >
                <ErrorPage/>
            </Route>
        </Switch>
    
    </div>
    )
}