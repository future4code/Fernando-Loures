import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import { hash, compare } from "./services/hashManager";
import getAddress from './endpoints/getAddress'

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)

const address = getAddress("05424-150")