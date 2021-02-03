import {useState} from 'react'

export  const useInput = () =>{
    const [input, setImput] = useState("")

    const handleInput =(event) =>{
        setImput(event.target.value)
    }

    return [input, handleInput]
}