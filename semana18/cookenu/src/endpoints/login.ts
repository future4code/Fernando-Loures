import { Response, Request } from 'express';
import connection from '../connection';
import { compare } from '../services/hashManager';
import { generateToken } from '../services/authenticator';
const login = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.statusCode = 422
            throw new Error("You have to fullfill all values. ");
        }
        if (password.length < 6) {
            res.statusCode = 401
            throw new Error("Credential error");
        }
        if (email.indexOf("@") < 0) {
            res.statusCode = 422
            throw new Error("Email not allowed.");
        }
        const user = await connection.raw(`
        SELECT * FROM Cookenu_User WHERE email = "${email}";`)
        const compareHash = await compare(password, user[0][0].password)
        if (user[0].length === 0 || !compareHash) {
            res.statusCode = 401
            throw new Error("Credential error");
        }
        console.log(user[0][0].id)
        const token: string = generateToken({ id: user[0][0].id, email: user[0][0].email })
        res.status(201).send({ token: token })
    } catch (err) {
        res.send({ message: err.message })
    }
}
export default login;