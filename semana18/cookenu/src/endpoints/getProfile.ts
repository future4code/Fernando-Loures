import { Response, Request } from 'express';
import connection from '../connection';
import {getData} from '../services/authenticator';
import { authenticationData } from '../types';

const getProfile = async (req: Request, res: Response): Promise<any> => {
    try {
        const token: string = req.headers.authorization!
        console.log("token: ",token)
        const user: authenticationData | null = getData(token)
        if (!token) {
            res.statusCode = 401
            throw new Error("Token not valid. ");
        }
        // const user = await connection.raw(`
        // SELECT * FROM Cookenu_User WHERE id = "${id && id.id}";`)
        
        res.status(200).send(user) 
    } catch (err) {
        res.send({ message: err.message })
    }
}
export default getProfile;