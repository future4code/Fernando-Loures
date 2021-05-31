import { connection } from "../controller/app"
import { post } from "../model/post"
import { authenticationData } from "../model/user"

export const getPostData = async(id: string):Promise<post> =>{
    const queryResult: any = await connection("labook_posts")
    .select("*")
    .where({ id })
    return queryResult
}