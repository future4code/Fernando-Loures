import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, {useState} from 'react'
import { createPost } from '../../Services/user'
import useForm from '../../Hooks/UseForm'
import { useHistory } from 'react-router'
import {neutralColor} from '../../Constants/colors'


const NewPost = () =>{
    const [form, onChange, clear] = useForm({text:"", title:""})
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()
    const onSubmitForm = (event) =>{
        event.preventDefault()
        createPost(form, clear, history, setIsLoading)
    }

    return(
        <div>
            <h3>Escreva seu post:</h3>
            <div>
                <form onSubmit={onSubmitForm}>
            <TextField 
                    id="outlined-basic"
                    label="Título"
                    variant="outlined"
                    name={"title"}
                    value={form.title}
                    type={"text"}
                    onChange={onChange}
                    margin={"dense"}
                    required
                    fullWidth
                    
                     />
            <TextField 
                    id="outlined-basic"
                    label="Post"
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
                {isLoading ? <CircularProgress /> : "Postar" }
                </Button>
            </form>
            </div>
            <div>
            </div>
        </div>
    )
}
export default NewPost