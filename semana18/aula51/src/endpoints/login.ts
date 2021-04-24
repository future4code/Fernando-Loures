import connection from '../connection';
import { Request, Response} from 'express';
import {userCredentials} from '../type'
import {generateToken} from '../services/authenticator'
import {compare} from '../services/hashManager'

const login = async(req: Request, res:Response) =>{
    try{
    const {email, password}:userCredentials = req.body
    if(!email || !password){
        res.statusCode = 422
        throw new Error("'email' e 'senha' são obrigatórios ")
     }
    const user = await connection.raw(`
        SELECT * FROM  User WHERE email = "${email}";
    `)
    if(!user[0]){
      res.statusCode = 401
      throw new Error("Credenciais inválidas")
    }
     const comparePassword = await compare(password, user[0][0].password)
     console.log(user[0], email, password, user[0][0].password, comparePassword)
     if (!comparePassword) {
        res.statusCode = 401
        throw new Error("Credenciais inválidas")
     }
     const token: string = generateToken({ id: user.id, role: user.role })
     res.send({ token })
    } catch (error) {
      //   if (res.statusCode == 200) {
         //   res.status(500).send({ message: "Internal server error" })
      //   } else {
           res.send({ message: error.message })
      //   }
     }
}
export default login;