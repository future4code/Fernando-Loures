import { connection } from "..";
import { userData } from "../model/user";

const createUserDB =async (user:userData): Promise<void>=>{
    try {
        await connection.raw(`
            INSERT INTO User_Arq (id, name, email, role, password) 
            VALUES("${user.id}","${user.name}","${user.email}","${user.role}","${user.password}");
        `)
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);    
    }
}
export default createUserDB