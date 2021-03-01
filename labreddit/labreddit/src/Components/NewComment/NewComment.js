import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, {useState} from 'react'
import { createComment } from '../../Services/user'
import useForm from '../../Hooks/UseForm'
import { useHistory } from 'react-router'
import {neutralColor} from '../../Constants/colors'

const NewComment = (props) =>{
    const [form, onChange, clear] = useForm({text:"", title:""})
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()
    const onSubmitForm = (event) =>{
        event.preventDefault()
        createComment(form, props.id, clear, history, setIsLoading)
    }

    return(
        <div>
            <h3>Escreva seu Comentário:</h3>
            <div>
                <form onSubmit={onSubmitForm}>
            
            <TextField 
                    id="outlined-basic"
                    label="Comentário"
                    variant="outlined"
                    name={"text"}
                    value={form.text}
                    type={"text"}
                    onChange={onChange}
                    margin={"dense"}
                    required
                    fullWidth
                    
                     />

                <Button
                    margin={"dense"} 
                    fullWidth variant="contained" 
                    color="primary" 
                    type={"submit"}
                >
                {isLoading ? <CircularProgress /> : "Criar Comentário" }
                </Button>
            </form>
            </div>
            <div>
            </div>
        </div>
    )
}
export default NewComment