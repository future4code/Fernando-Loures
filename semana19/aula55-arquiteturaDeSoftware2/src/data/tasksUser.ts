import { connection } from "../data/connection";
import {setTasks, userTask} from "../model/setter";

export const joinTasksUser = async (
    id: string
):Promise<any> => {
    try {
        const user = await connection.raw(`
             SELECT * FROM to_do_list_users WHERE id = "${id}"
        `)
        const task = await connection.raw(`
             SELECT * FROM to_do_list_tasks WHERE author_id = "${id}";
        `)
        if(!user || !task){
            throw new Error("error");   
        }
        const result: userTask = setTasks(user[0][0], task[0])
        if(!result){
            throw new Error("error");   
        }
        return result
    } catch (error) {
        console.log(error)
    }
}