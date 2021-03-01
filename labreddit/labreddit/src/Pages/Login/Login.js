import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button , CircularProgress} from '@material-ui/core';
import { useHistory } from 'react-router';
import {goToSignUp} from '../../Router/Coordinator';
import {StyledForm, Container, BtnContainer} from './style'
import useForm from '../../Hooks/UseForm'
import {login} from '../../Services/user'
import useUnprotectedPage from '../../Hooks/useUnprotectedPage'


const Login = ({ setRightButton}) =>{
    const history = useHistory()
    const [form, onChange, clear] = useForm({email:"", password:""})
    useUnprotectedPage() 
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) =>{
        event.preventDefault()
        login(form, clear, history, setRightButton, setIsLoading)
    }

    return(
        <Container>
            <h1>Labeddit</h1>
            <StyledForm onSubmit={onSubmitForm}>
                <TextField 
                    id="outlined-basic"
                    label="e-mail"
                    variant="outlined"
                    name={"email"}
                    value={form.email}
                    type="email"
                    onChange={onChange}
                    margin={"dense"}
                    required
                    fullWidth
                     />
                <TextField 
                    // id="outlined-basic"
                    label="senha"
                    type="password"
                    required
                    variant="outlined"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    margin={"dense"}
                    fullWidth
                 />
                <Button margin={"dense"} fullWidth variant="contained" color="primary" type={"submit"}>
                    {isLoading ? <CircularProgress color={"black"}/> : "Fazer Login"}
                </Button>
            </StyledForm> 
                <BtnContainer>
                    <Button margin={"dense"} fullWidth variant="contained" onClick={()=>goToSignUp(history)}>Cadastre-se</Button>
                </BtnContainer> 

        </Container>
    )
}

export default Login