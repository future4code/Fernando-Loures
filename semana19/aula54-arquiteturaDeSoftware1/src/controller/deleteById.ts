import {Request, Response} from "express";
import deleteById from "../business/deleteById";

const deleteByIdController = async (req:Request, res:Response): Promise<void> =>{
    try {
        const token: string = req.headers.authorization || "" 
        const id: string = req.params.id
        await deleteById({id, token})
        res.status(200).send("Usuário deletado com sucesso!")        
    } catch (error) {
        res.status(400).send({ error: error.message });
    }  
}
export default deleteByIdController