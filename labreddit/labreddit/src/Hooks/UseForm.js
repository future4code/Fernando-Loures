import { useState } from 'react'

const useForm = (intialState) =>{
    const [form, setForm] = useState(intialState)

    const handleOnChange = (event) =>{
        const {value, name} = event.target
        setForm({...form, [name]:value})
    }

    const clear = () =>{
        setForm(intialState)
    }

    return [form, handleOnChange, clear]
}
export default useForm