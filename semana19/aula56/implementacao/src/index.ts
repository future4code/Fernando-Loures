import app from "./controller/app"
import taskRouter from "./routers/taskRouter"
import userRouter from "./routers/userRouter"

app.use('/user', userRouter)
app.use('/task', taskRouter)