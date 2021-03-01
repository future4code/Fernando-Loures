import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledToolBar} from './styles'
import {goToFeed, goToLogin} from '../../Router/Coordinator'
import { useHistory } from 'react-router';

const Header = ({rightButton, setRightButton}) =>{
    const token = localStorage.getItem("token")
    const history = useHistory()
    
    const logout =()=>{
        localStorage.removeItem("token")
    }

    const rightButtonAction = () =>{
        if(token){
            logout()
            setRightButton("Login")
            goToLogin(history)
        } else{
            goToLogin(history)
        }
    }





    return(
        <AppBar position="static">
            <StyledToolBar>
            <Button onClick={()=>goToFeed(history)} color="inherit" >LabEddit</Button>
            {<Button onClick={rightButtonAction} color="inherit" >{rightButton}</Button>}
            </StyledToolBar>
        </AppBar>
    )
}
export default Header