import { Response, Request } from 'express';
import connection from '../connection';
import {getData} from '../services/authenticator';
import { authenticationData } from '../types';

const getOtherProfile = async (req: Request, res: Response): Promise<any> => {
    try {
        const token: string = req.headers.authorization!
        const idUser: string = req.params.id
        const user: authenticationData | null = getData(token)
        if (!token) {
            res.statusCode = 401
            throw new Error("Token not valid. ");
        }
        const otherUser = await connection.raw(`
            SELECT * FROM Cookenu_User WHERE id = "${idUser}";
        `)
        const {id, name, email } = otherUser[0][0]
        res.status(200).send({id, name, email }) 
    } catch (err) {
        res.send({ message: err.message })
    }
}
export default getOtherProfile;