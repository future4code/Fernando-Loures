import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { hash } from "../services/hashManager";
import {signupData} from '../data/signupData'

export const signupBusiness = async(name:string, email:string, password:string):Promise<object | undefined > =>{
    let statusCode: number =201
    try {
        let message: string = "Success!"
        if (!name || !email || !password) {
            statusCode = 406
            message = '"name", "email" and "password" must be provided'
            throw new Error(message)
         }
         const id: string = generateId()
         const cypherPassword: string = await hash(password);
         const token: string = generateToken({ id })
         signupData({id, name, email, password: cypherPassword})        
         return {token, message}
    } catch (error) {
        console.log({error, statusCode})
    }
}