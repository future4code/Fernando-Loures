import connection from '../connection';
import { Request, Response} from 'express';
import { getTokenData} from '../services/authenticator'
import { userRole } from '../type';


const deleteUser = async(id:string): Promise<any> =>{
    const result = await connection.raw(`
        DELETE FROM User WHERE id = "${id}"; 
    `)
}
const deleteProfile = async (req: Request, res:Response) =>{
    try {
        const token = req.headers.authorization as string;
        const authenticationData = getTokenData(token);
        if (authenticationData && authenticationData.role !== userRole.ADMIN) {
          throw new Error("Only a admin user can access this funcionality");
        }
        const id = req.params.id;
        await deleteUser(id);
        res.sendStatus(200);
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
}
export default deleteProfile;