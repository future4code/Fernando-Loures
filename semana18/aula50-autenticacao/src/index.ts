import app from './app';
import createUser from './endpoints/createUser';
import connection from './connection';
import {Request, Response} from 'express'
import login from './endpoints/login';
import { getUser } from './endpoints/getUserById';

app.post("/user/signup", createUser)
app.post("/user/login", login)
app.get("/user/profile", getUser)

app.get("/users", async (req: Request, res:Response): Promise<any>=>{

    try {
        const result: any = await connection.raw(`
        SELECT * FROM User;
        `)
        res.status(200).send(result[0])
    } catch (error) {
        res.send(error.message || error.sqlMessage)    
    }    
})