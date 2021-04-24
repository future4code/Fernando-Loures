import connection from "../connection"
import { Request, Response } from 'express';
import {getTokenData} from '../services/authenticator';

const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM User WHERE id = ${id};
    `)
    return result[0]
}

const getUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const tokenData = getTokenData(token);
        // a gente PRECISA verificar se o token não está expirado
        const user = tokenData && await getUserById(tokenData.id);
        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}
export default getUser;