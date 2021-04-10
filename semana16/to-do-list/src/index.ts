import app from './app'
import connection from './connection'
import {createUser, getUsers, getUserById, updateUser, createTask, getTasks, getTaskById,getTaskByCreator, setTaskResponsability, getTaskResponsability } from './functions/functions'
import {searchUser, getStatus} from './functions/functions'
app;

app.post("/user", createUser);
app.get("/user", getUsers)
app.get("/user/:id", getUserById)
app.put("/user/:id", updateUser)

app.post("/task", createTask)
app.get("/task", getTasks)
app.get("/task/:id", getTaskById)
app.get("/task/user/:creator", getTaskByCreator)

app.post("/task/responsible", setTaskResponsability)
app.get("/task/get/responsible", getTaskResponsability)

app.get("/users?", searchUser)

app.get("/tasks", getStatus)