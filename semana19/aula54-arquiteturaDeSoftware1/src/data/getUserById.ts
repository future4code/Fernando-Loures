import { connection } from "..";
import { userData } from "../model/user";


const getUserById = async (email: string): Promise<any> => {
    try {
        const user: any = await connection.raw(`
        SELECT * FROM User_Arq WHERE email = "${email}";
    `)
    return user[0][0]
    } catch (error) {
        console.log(error)
    }
}
export default getUserById