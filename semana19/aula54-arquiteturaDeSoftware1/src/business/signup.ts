import createUserDB from "../data/createUser";
import { signupUser } from "../model/user"
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

const signupUser =async (input: signupUser):Promise<string>=>{
    try {
        if(!input.email || !input.name || !input.password || !input.role ){
            throw new Error("Invalid credentials");
        } 
        if(input.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }
        if(input.password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }
        const id :string = generateId()
        const {name, email, role, password} = input 
        const hashPassword: string = await hash(input.password)
        const token = generateToken({id,role})
        await createUserDB({id, name, email, role, password:hashPassword})
        return token

    } catch (error) {
        throw new Error( error.message || "Error creating user. Please check your system administrator.");
    }
}
export default signupUser