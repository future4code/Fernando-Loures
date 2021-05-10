import deleteUser from "../data/deleteUser";
import getUsers from "../data/getUsers";
import { deleteData } from "../model/user";
import { getTokenData } from "../services/authenticator";

const deleteById = async (input: deleteData): Promise<void>=>{
    try {
        if (!input.token){
            throw new Error("not authorized");
        }
        const {id, role} = getTokenData(input.token)
        if(!id || !role|| role != "ADMIN"){
            throw new Error("not authorized");
        }
        deleteUser(input.id)
    } catch (error) {
        console.log(error)
    }
}
export default deleteById;