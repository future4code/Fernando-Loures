import { task } from "./task";
import { user, USER_ROLES } from "./user";

export type userTask = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES,
    tasks?:  task[]
}

export function setTasks(user: userTask, tasks: task[]):userTask {
    user.tasks = tasks
    return user
}