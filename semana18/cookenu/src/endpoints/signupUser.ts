import { Response, Request } from 'express';
import connection from '../connection';
import generateId from '../services/generatorId';
import { generateHash } from '../services/hashManager';

const signup = async (id: string, name: string, email: string, password: string): Promise<void> => {
    await connection.raw(`
        INSERT INTO Cookenu_User (id, name, email, password) 
            VALUES ("${id}", "${name}","${email}","${password}");
    `)
}
const signupUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("You have to fullfill all values. ");
        }
        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("Password not allowed.");
        }
        if (email.indexOf("@") < 0) {
            res.statusCode = 422
            throw new Error("Email not allowed.");
        }
        const userExist = await connection.raw(`
        SELECT * FROM Cookenu_User WHERE email = "${email}";`)
        if (userExist[0].length>0) {
            res.statusCode = 422
            throw new Error("Email already exist.");
        }
        const id: string = generateId()
        const newPassword: string = await generateHash(password)

        signup(id, name, email, newPassword)
        res.send(`Signup ${email} Successufuly!`)

    } catch (err) {
        res.send({ message: err.message })
    }
}
export default signupUser;