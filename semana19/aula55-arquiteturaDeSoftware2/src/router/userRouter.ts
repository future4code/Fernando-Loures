import express from 'express'
import { login } from '../controller/login';
import { signup } from '../controller/signup';
import { getTaskUser } from '../controller/taskUser';

export const userRouter = express.Router();

userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.get('/taskuser', getTaskUser)