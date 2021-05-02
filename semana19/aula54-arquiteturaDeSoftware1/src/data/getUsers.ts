import { connection } from "..";
import { userData } from "../model/user";


const getUsers = async (): Promise<any> => {
    try {
        const user: any = await connection.raw(`
        SELECT * FROM User_Arq;
    `)
    return user[0]
    } catch (error) {
        console.log(error)
    }
}
export default getUsers