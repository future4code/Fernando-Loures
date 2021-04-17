import connection from "../connection";
import { Request, Response } from 'express';
import { getData } from '../services/authenticator'

 const getUserById = async (id: string): Promise<any> =>{
    const user = await connection.raw(`
            SELECT * FROM User WHERE id = ${id}
        `)
    return user[0];
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const authenticationData = getData(token);
        console.log(authenticationData)
         const user = await getUserById(authenticationData.id);
        res.status(200).send({
            id: user.id,
            email: user.email,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}




type userCredentials = {
    email: string,
    password: string
}