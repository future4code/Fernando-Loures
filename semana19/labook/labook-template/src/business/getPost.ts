import { getPostData } from "../data/getPostData"
import { post } from "../model/post"
import { authenticationData } from "../model/user"

export const getPostBusiness = async(id:string) => {
    let statusCode = 200
    try {
        const queryResult: post = await getPostData(id)
        if (!queryResult) {
            statusCode = 404
            throw new Error("Post not found")
        }

        const post: post = {
            id: queryResult.id,
            photo: queryResult.photo,
            description: queryResult.description,
            type: queryResult.type,
            createdAt: queryResult.createdAt,
            authorId: queryResult.authorId,
        }
        return post
    } catch (error) {

    }
}