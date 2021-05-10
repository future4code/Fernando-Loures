import { Request, Response } from "express";
import { selectTaskById } from "../data/selectTaskById";
import { TaskDatabase } from "../data/TaskDatabase";

export const getTaskById = async (
   req: Request,
   res: Response
) => {
   try {

      const { id } = req.params

      const td: TaskDatabase = new TaskDatabase("to_do_list_tasks")
      const result = await td.getTaskById(id)

      if (!result) {
         throw new Error("Tarefa não encontrada")
      }

      const taskWithUserInfo = {
         id: result.id,
         title: result.title,
         description: result.description,
         deadline: result.deadline,
         status: result.status,
         authorId: result.author_id,
         authorNickname: result.nickname
      }

      res.status(200).send(taskWithUserInfo)

   } catch (error) {
      res.status(400).send(error.message)
   }
}