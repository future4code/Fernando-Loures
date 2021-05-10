import { createTaskInput } from "../model/task"
import { generateId } from "../services/idGenerator"
import { TaskDatabase } from "../data/TaskDatabase"

export async function taskBusiness(input: createTaskInput): Promise<void> {

   try {

      if (
         !input.title ||
         !input.description ||
         !input.deadline ||
         !input.authorId
      ) {
         throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
      }

      const id: string = generateId()

      const td: TaskDatabase = new TaskDatabase("to_do_list_tasks");

      await td.createTask({
         id,
         title: input.title,
         description: input.description,
         deadline: input.deadline,
         authorId: input.authorId,
      })

   } catch (error) {

   }
}