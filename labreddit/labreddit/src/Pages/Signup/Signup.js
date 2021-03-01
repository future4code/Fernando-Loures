import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, CircularProgress } from '@material-ui/core';
import {StyledForm, Container, BtnContainer} from './style'
import useForm from '../../Hooks/UseForm'
import { useHistory } from 'react-router';
import {goToLogin} from '../../Router/Coordinator';
import { signUpUser } from '../../Services/user';
import useUnprotectedPage from '../../Hooks/useUnprotectedPage'


export default function Signup({ setRightButton}){
    const history = useHistory()
    const [form, onChange, clear] = useForm({email:"", password:"", username:""}) 
    useUnprotectedPage() 
    const [isLoading, setIsLoading] = useState(false)
    
    const onSubmitForm = (event) =>{
        event.preventDefault()
        signUpUser(form, clear,history, setRightButton, setIsLoading)
    }

    return(
        <Container>
            <h1>Labeddit</h1>
            <h3>Cadastrar</h3>
            <StyledForm onSubmit={onSubmitForm}>
            <TextField 
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    name={"username"}
                    value={form.username}
                    type={"text"}
                    onChange={onChange}
                    margin={"dense"}
                    required
                    fullWidth
                    
                     />
                
            <TextField 
                    id="outlined-basic"
                    label="e-mail"
                    variant="outlined"
                    name={"email"}
                    value={form.email}
                    type={"email"}
                    onChange={onChange}
                    margin={"dense"}
                    required
                    fullWidth
                     />
                <TextField 
                    id="outlined-basic"
                    label="senha"
                    variant="outlined"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    margin={"dense"}
                    type="password"
                    required
                    fullWidth
                 />
                
                <Button variant="contained" color="primary" type={"submit"}>
                    {isLoading ? <CircularProgress /> : "Cadastrar"}
                </Button>
            </StyledForm>  
            <BtnContainer>
                <Button margin={"dense"} fullWidth variant="contained" onClick={()=>goToLogin(history)}>Voltar ao Login</Button>
            </BtnContainer> 

        </Container>
    )
}