import {Request, Response} from "express";
import signupUser from "../business/signup";

const signupController = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {email, name, password, role} = req.body
        const token = await signupUser({email, name, password, role})
        console.log(token)
        res.status(200).send(token)        
    } catch (error) {
        res.status(400).send({ error: error.message });
    }  
}
export default signupController