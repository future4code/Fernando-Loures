import { user } from "../model/user"
import {connection} from '../controller/app'
export const signupData =async (user: user): Promise<void>=>{
    const {id, name, email, password} = user
    await connection('labook_users')
    .insert({
       id,
       name,
       email,
       password
    })

}