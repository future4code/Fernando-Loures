import { postData } from "../data/postData"
import { authenticationData } from "../model/user"
import { generateId } from "../services/generateId"
import { getTokenData } from "../services/generateToken"

export const createPostBusiness = async(photo:string, description:string, type:string, token:string) => {
    try {
        const tokenData: authenticationData = getTokenData(token)
        const id: string = generateId()
        
        const post = await postData(id, photo, description, type, tokenData)
    } catch (error) {
        console.log(error)
    }
}