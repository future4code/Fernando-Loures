import { BaseDatabase } from "../src/data/BaseDatabase";
import { User, UserRole } from "../src/model/User";


export const normalUserMock = new User(
    "abc123Normal", "name", "email@email.com", "password", UserRole.NORMAL);

export const adminUserMock = new User(
    "abc123Admin", "name", "admin@email.com", "password", UserRole.ADMIN);

export const emptyUser = new User(
    "", "", "", "", UserRole.ADMIN);
    
class UserDatabaseMock extends BaseDatabase {

    private static TABLE_NAME = "";

    public async createUser(
        id: string,
        email: string,
        name: string,
        password: string,
        role: string
    ): Promise<void> { }

    public async getUserByEmail(email: string): Promise<User> {
        if(email === "newemail@email.com"){
            
        }
        return normalUserMock
    }
}
export default new UserDatabaseMock()
