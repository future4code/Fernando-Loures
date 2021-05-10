import {Request, Response} from "express";
import loginBusiness from "../business/loginBusiness";

const loginController = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {email, password} = req.body
        const token = await loginBusiness({email,password})
        res.status(200).send(token)        
    } catch (error) {
        res.status(400).send({ error: error.message });
    }  
}
export default loginController