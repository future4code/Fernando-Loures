import express, { Express, Request, Response } from "express"
import { getPostBusiness } from "../business/getPost"
import { authenticationData } from "../model/user"

export const getPost = async (req: Request, res: Response) => {
    try {
        const id:string = req.params.id
        const post = await getPostBusiness(id)
       
        res.status(200).send({ message:"Success!", post })
  
     } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
     }
}