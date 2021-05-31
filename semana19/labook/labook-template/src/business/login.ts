import { user } from "../model/user"
import { generateToken } from "../services/generateToken"
import { compare } from "../services/hashManager"
import {loginData} from '../data/loginData'

export const loginBusiness = async(inputEmail:string, inputPassword:string):Promise<Object | undefined> => {
    let message: string= "Success!"
    let statusCode: number = 200
    try {
        if (!inputEmail || !inputPassword) {
            statusCode = 406
            message = '"email" and "password" must be provided'
            throw new Error(message)
        }
        const user = await loginData(inputEmail)
        if (!user) {
            statusCode = 401
            message = "Invalid credentials"
            throw new Error(message)
        }
        const {id, name, email, password} = user
        const passwordIsCorrect: boolean = await compare(inputPassword, password)
        if (!passwordIsCorrect) {
            statusCode = 401
            message = "Invalid credentials"
            throw new Error(message)
        }
        const token: string = generateToken({
            id: user.id
        })
        return {message, statusCode, token}

    } catch (error) {
        console.log(error)
    }
}