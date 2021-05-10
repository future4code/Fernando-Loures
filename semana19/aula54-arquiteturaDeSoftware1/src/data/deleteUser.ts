import { connection } from "..";

const deleteUser = async (id:string): Promise<void> => {
    try {
        const user: any = await connection.raw(`
        DELETE FROM User_Arq WHERE id = "${id}";
    `)
    } catch (error) {
        console.log(error)
    }
}
export default deleteUser