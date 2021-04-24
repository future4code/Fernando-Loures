import connection from "../connection";
import { Request, Response } from 'express';
import generateId from '../services/idGenetator'
import { generateToken } from '../services/authenticator'

export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { email, password } = req.body
        if (!email || email.indexOf("@") < 0) {
            res.statusCode = 422
            throw new Error("Preencha o campo 'email' corretamente.")
        }
        if (!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Preencha os campo password corretamente.")
        }
        
        const [user] = await connection.raw(`
            SELECT * FROM User 
            WHERE email = "${email}";
        `)
        if(!user[0] || user[0].password !== password){
            throw new Error("Invalid credentials.")
        }
        const token = generateToken({id:user.id})
        res.status(200).send({token: token});

    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

type userCredentials ={
    email: string,
    password: string
}