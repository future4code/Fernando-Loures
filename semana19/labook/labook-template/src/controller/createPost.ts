import { app } from "..";
import { createPostBusiness } from "../business/createPost";
import express, { Express, Request, Response } from "express"

app.post('/posts/create', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { photo, description, type } = req.body
      const token: string = req.headers.authorization as string
      await createPostBusiness(photo, description, type,token)
      res.status(201).send({ message })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
})
