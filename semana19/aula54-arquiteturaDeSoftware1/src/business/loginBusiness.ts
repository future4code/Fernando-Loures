import getUserById from "../data/getUserById";
import { convertRoleToAuthentication, loginData, userData, USER_ROLES } from "../model/user";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";

const loginBusiness = async (login:loginData): Promise<string | undefined>=>{
    try {
        if(!login.email || !login.password || login.password.length < 6 || login.email.indexOf('@') < 0){
            throw new Error("Credential invalid");
        }
        const user: userData = await getUserById(login.email)
        if(!user)throw new Error("Credential invalid");
        let hashCompare:boolean =false
        hashCompare = await compare(login.password, user.password)
        if(!hashCompare){
            throw new Error("Credential invalid");
        }
        const id: string = user.id
        const role: USER_ROLES = convertRoleToAuthentication(user.role)
        const acessToken: string = generateToken({id,role})
        return acessToken
    } catch (error) {
        console.log(error)
    }
}
export default loginBusiness;