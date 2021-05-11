import express from "express"
import { createPost } from "../controller/post"
import { getPost } from "../controller/getPost"

export const postRouter = express.Router();

postRouter.post('/create', createPost)
postRouter.get('/:id', getPost)