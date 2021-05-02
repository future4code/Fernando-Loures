import {Request, Response} from "express";
import getAllUsers from "../business/getAll";
import loginBusiness from "../business/loginBusiness";

const getAllController = async (req:Request, res:Response): Promise<void> =>{
    try {
        const token: string | undefined= req.headers.authorization
        const users : object = await getAllUsers(token)
        res.status(200).send(users)        
    } catch (error) {
        res.status(400).send({ error: error.message });
    }  
}
export default getAllController