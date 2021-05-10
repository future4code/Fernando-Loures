import { Response, Request } from 'express';
import connection from '../connection';
import {getData} from '../services/authenticator';
import generateId from '../services/generatorId';
import { authenticationData } from '../types';

const createRecipes = async (req: Request, res: Response): Promise<any> => {
    try {
        const {title, description } = req.body
        const token: string = req.headers.authorization!
        const user: authenticationData | null = getData(token)
        if (!token) {
            res.statusCode = 401
            throw new Error("Token not valid. ");
        }
        const idUser: string |null = user && user.id;
        const idRecipe: string = generateId()
        const d: number = new Date().getDate()
        const m: number = (new Date().getMonth() +1)
        const month = m > 9 ? m.toString() : "0" + m.toString() 
        const day = d > 9 ? d.toString() : "0" + d.toString() 
        const year: string = new Date().getFullYear().toString()
        const creationDate = year + "/" + month +"/"+ day
        await connection.raw(`
            INSERT INTO Recipes (id, title, description, creation_date, user_id) 
                VALUES ("${idRecipe}","${title}","${description}","${creationDate}","${idUser}");
        `)
        res.status(200).send("Success!!") 
    } catch (err) {
        res.send({ message: err.message })
    }
}
export default createRecipes;