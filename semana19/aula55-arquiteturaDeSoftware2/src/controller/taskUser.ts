import { Request, Response } from "express";
import { taskUser } from "../business/taskUser";
import { userTask } from "../model/setter";

export const getTaskUser = async (
    req: Request,
    res: Response
): Promise<userTask | undefined> => {
    try {
        const { id } = req.params
        const result: userTask = await taskUser(id)
        if (!result){
            throw new Error("erro");
        }
        return result
    } catch (error) {
        res.status(400).send(error.message)
    }
}