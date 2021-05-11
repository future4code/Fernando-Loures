import { connection } from "../controller/app"
import { post } from "../model/post"
import { authenticationData } from "../model/user"

export const postData =async(id:string, photo:string, description:string, type:string, authorId:authenticationData): Promise<void>=>{
    await connection("labook_posts")
            .insert({
                id,
                photo,
                description,
                type,
                authorId
            })
}