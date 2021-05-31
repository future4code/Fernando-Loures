import express, { Express, Request, Response } from "express"
import { signupBusiness } from "../business/signup"

const signup = async (req: Request, res: Response) => {
   try {
      const { name, email, password } = req.body
      const {token, message}:any = signupBusiness(name, email, password)
      res.status(201).send({ message, token })

   } catch (error) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message

      res.send({ message })
   }
}
export default signup