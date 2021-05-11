import express, { Request, Response } from "express"
import { loginBusiness } from "../business/login"

export const login = async (req: Request, res: Response) => {
    let status: number = 400
    try {
        const { email, password } = req.body
        const {message, statusCode, token}:any = await loginBusiness(email, password)
        res.status(200).send({ message, token })
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = status
        res.send({ message })
    }
}
