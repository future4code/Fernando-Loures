import getUsers from "../data/getUsers";
import { userData } from "../model/user";
import { getTokenData } from "../services/authenticator";

const getAllUsers = async (token:string| undefined): Promise<any>=>{
    try {
        if (!token){
            throw new Error("not authorized");
        }
        const {id, role} = getTokenData(token)
        if(!id || !role){
            throw new Error("not authorized");
        }
        const users: object = await getUsers()
        return users
        
    } catch (error) {
        console.log(error)
    }
}
export default getAllUsers;