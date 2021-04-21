import connection from '../connection';
import { Request, Response} from 'express';
import { getTokenData} from '../services/authenticator'
import { userRole } from '../type';

const getUserById = async (id:string): Promise<any> =>{
    const result = await connection(`
        SELECT * FROM User Where id = "${id}";
    `)
    return result[0];
}

const getProfile = async(req: Request, res:Response): Promise<void> =>{
    try{
        const tokenData = getTokenData(req.headers.authorization!);
        console.log("aqui",tokenData, req.headers.authorization)
        if (!tokenData) {
            res.statusCode = 401
            throw new Error("nãoe existe token")
        }
        if(tokenData.role !== userRole.NORMAL ) {
            throw new Error("Unauthorized")
        }
        const user = tokenData && await getUserById(tokenData.id)
        res.status(200).send(user)

    } catch (error) {
        // if (res.statusCode == 200) {
        //    res.status(500).send({ message: "Internal server error" })
        // } else {
           res.send({ message: error.message })
        // }
     }
}
export default getProfile;