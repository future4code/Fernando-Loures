import connection from '../connection';
import { Request, Response } from 'express';
import { userRole, userCredentials, user } from '../type';
import generateId from '../services/idGenerator';
import { generateToken } from '../services/authenticator';
import { hash } from '../services/hashManager';
import { updateLanguageServiceSourceFile } from 'typescript';

const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password, role }= req.body
        if (!email || !password || !role) {
            res.statusCode = 422
            throw new Error("'email', 'senha' e role são obrigatórios ")
        }
        console.log(role)
        if(role.toUpperCase() !== userRole.NORMAL &&  role.toUpperCase() !== userRole.ADMIN ){
            throw new Error("Role not defined.");    
        }
        const user = await connection.raw(`SELECT * FROM User WHERE email = "${email};"`)
        if(user[0].length>0){
            throw new Error("Email already exist.");    
        }
        const id: string = generateId()
        // Criar encryptação
        const cypherText = await hash(password)
        console.log("senha hasheada: ", cypherText)

        await connection
        .raw(`INSERT INTO User (id, email, password, role) VALUES ("${id}", "${email}", "${cypherText}", "${role}");`);
        const token: string = generateToken({id, role})
        res.status(201).send({email, token})
    } catch (err) {
        // if (res.statusCode === 200) {
        //     res.status(500).send({ message: "Internal server error" })
        //  } else {
            res.send({ message: err.message })
        //  }
    }
}
export default createUser;