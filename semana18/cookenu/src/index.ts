import app from './app'
app


// import { compare } from 'bcryptjs'
// import { generateHash } from './services/hashManager'
// const teste = async() =>{
//     const newPassword: string = await generateHash("password")
//     console.log(newPassword)
//     const compareHash = await compare("password", newPassword)
//     console.log(compareHash)
// }
// teste()




// import {generateToken, getData} from './services/authenticator'
// import {authenticationData} from './types'

// const testeToken = () =>{
//     const id: authenticationData = {id:"123"}
//     const res = generateToken(id)
//    console.log(res)
//    return res
// }
// const testeGetToken = () =>{
//     return getData(testeToken())
// }
// testeGetToken() && console.log("token válido")