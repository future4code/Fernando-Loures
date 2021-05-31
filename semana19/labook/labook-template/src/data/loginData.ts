import { connection } from "../controller/app"
import { user } from "../model/user"

export const loginData = async (email: string): Promise<user> => {
    const result: any = await connection("labook_users")
        .select("*")
        .where({ email })
    return result[0]
}