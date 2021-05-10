import {app} from './controller/app'
import {userRouter} from './router/userRouter'
import {taskRouter} from './router/taskRouter'

app.use("/user", userRouter)
app.use("/task", taskRouter)