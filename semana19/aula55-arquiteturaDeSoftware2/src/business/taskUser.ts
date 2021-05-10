import { userTask } from "../model/setter";
import {joinTasksUser} from "../data/tasksUser"
export async function taskUser(id: string): Promise<userTask> {
   try {
        const user: userTask | undefined = await joinTasksUser(id)  
        if(!user){
            throw new Error("erro");
        }
        return user
   } catch (error) {
            throw new Error("error");
       }
}