import connection from "../connection";
import { Request, Response } from 'express';
import generateId from '../services/idGenetator'
import { generateToken } from '../services/authenticator'

export default async function createUser(
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
            throw new Error("Preencha os campo e-mail corretamente.")
        }
        const id = generateId();
        const user = await connection.raw(`
            INSERT INTO User (id, email, password ) VALUES
            ("${id}",
             "${email}",
             "${password}"
            );
        `)
        const token = generateToken({ id })

        res.status(200).send({ token });

    } catch (err) {
        res.status(400).send({ message: err.message })
    }

}