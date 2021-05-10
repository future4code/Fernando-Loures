import { connection } from "./connection";
import {task} from "../model/task";

export class TaskDatabase {

    tableName: string;

    constructor(tableName: string, param2?: number){
        this.tableName = tableName;
    }

    async createTask (task: task) {
        await connection(this.tableName)
           .insert({
              id: task.id,
              title: task.title,
              description: task.description,
              deadline: task.deadline,
              author_id: task.authorId
           })
     }

     async getTaskById (id: string): Promise<any> {
        const result = await connection.raw(`
             SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
             JOIN to_do_list_users AS users
             ON author_id = users.id
             WHERE tasks.id = '${id}';
         `)
     
        return result[0][0]
     }

}