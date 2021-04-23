import axios from "axios"
import {Request, Response} from 'express'
import connection from "../connection"
import generateId from "../services/idGenerator"

const getAddress = async (cep: string): Promise<any>=>{
    let address: object={} 
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=>{
        const {cep,logradouro,complemento, bairro, localidade, uf} = res.data 
        address = {cep,logradouro,complemento, bairro, localidade, uf}
        console.log(address)
    })
    .catch((err)=>console.log(err))
    return address
}


const postAddress = async (body:any,id: string): Promise<void>=>{
    await connection.raw(`
    INSERT INTO Endereco (id,cep,logradouro,complemento, bairro, cidade, estado ) 
    VALUES("${id}", "${body.cep}", "${body.logradouro}", "${body.complemento}", "${body.bairro}", "${body.localidade}", "${body.uf}");
    `)
}

const saveAddress = async(req:Request, res: Response): Promise<any> =>{
    try {
        let body = await getAddress(req.params.cep)
        const id: string = generateId();
        await postAddress(body, id)
        console.log(body)
        res.status(201).send(body)
    } catch (err) {
        console.log(err)
    }
}
export default saveAddress;