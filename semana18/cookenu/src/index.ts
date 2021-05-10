import app from './app'
import createRecipes from './endpoints/createRecipes'
import getOtherProfile from './endpoints/getOtherProfile'
import getProfile from './endpoints/getProfile'
import getRecipe from './endpoints/getRecipe'
import login from './endpoints/login'
import signupUser from './endpoints/signupUser'

app.post("/cookenu/user/signup", signupUser)
app.post("/cookenu/user/login", login)
app.get("/cookenu/user/profile", getProfile)
app.post("/cookenu/user/recipe", createRecipes)
app.get("/cookenu/getuser/:id", getOtherProfile)
app.get("/cookenu/getrecipe/:id", getRecipe)








// import { compare } from 'bcryptjs'
// import { generateHash } from './services/hashManager'
// let newPassword: string =""
// const teste = async() =>{
//     newPassword = await generateHash("password")
//     console.log(newPassword)
//     const compareHash = await compare("password", newPassword)
//     console.log(compareHash)
// }
// teste()



// import {generateToken, getData} from './services/authenticator'
// import {authenticationData} from './types'

// const testeToken = () =>{
//     const id: authenticationData = {id: newPassword}
//     const res = generateToken(id)
//    console.log("res:",res)
//    return res
// }
// const testeGetToken = () =>{
//     const token= {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTkzNDg5NjMsImV4cCI6MTYyMTQyMjU2M30.nVMQAI7OI_qyiyfpPXlBuQ4XfFabW3DrrsvhFw4F104"}
//     return getData(token.token)
// }
// testeGetToken() && console.log("token válido")