import app from './app';
import { compare, hash } from './services/hashManager';
import login from './endpoints/login';
import createUser from './endpoints/createUser';
import { Request, Response } from 'express';
import connection from './connection';
import getProfile from './endpoints/getProfile';
import deleteProfile from './endpoints/deleteProfile';
import getUser from './endpoints/getUser';

app.post("/user/signup", createUser)
app.post("/user/login", login)
app.get("/user/profile", getProfile)
app.delete("/user/:id", deleteProfile)
app.get("/user", getUser)
app.get("/allusers", async (req: Request, res: Response): Promise <any> => {
    try {
        const result = await connection.raw(`
        SELECT * FROM User;`)

        res.status(200).send(result)
    } catch (err) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
})

// exercicio 1
const ex1 = async () => {
    const ola = await hash("ola")
    const hola = await hash("hola")
    console.log(ola, hola)

    const compare1 = await compare('ola', "$2a$10$mC3I40YCNdV6EXtE8jH5VeM9gKL/bFsvI80vvRNIu/bCWi7zIglqu")
    console.log(compare1)
}
ex1()


