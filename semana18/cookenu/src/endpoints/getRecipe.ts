import { Response, Request } from 'express';
import connection from '../connection';
import {getData} from '../services/authenticator';
import { authenticationData } from '../types';

const getRecipe = async (req: Request, res: Response): Promise<any> => {
    try {
        const token: string = req.headers.authorization!
        const idRecipe: string = req.params.id
        const user: authenticationData | null = getData(token)
        if (!token) {
            res.statusCode = 401
            throw new Error("Token not valid. ");
        }
        const recipe = await connection.raw(`
            SELECT * FROM Recipes WHERE id = "${idRecipe}";
        `)
        if(!recipe[0][0]){
            res.statusCode = 404
            throw new Error("Not found. ");
        }
        const {id, title, description, creation_date} = recipe[0][0]


        res.status(200).send({id, title, description, creation_date}) 
    } catch (err) {
        res.send({ message: err.message })
    }
}
export default getRecipe;