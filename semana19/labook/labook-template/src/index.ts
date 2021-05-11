/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { userRouter } from "./router/user"
import { postRouter } from "./router/post"


/**************************** CONFIG ******************************/

dotenv.config()
export const app: Express = express()
app.use(express.json())
app.use(cors())
app.use("/user", userRouter);
app.use("/post", postRouter);

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})