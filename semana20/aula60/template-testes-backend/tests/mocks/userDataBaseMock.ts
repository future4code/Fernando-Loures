import { User } from "../../src/model/User";
import { adminUserMock, normalUserMock } from "./userModelMock";

export class UserDatabase {

   public async createUser(user: User): Promise<void> {
      if(user.getEmail() === "emailrepetido@email.com") 
         throw new Error("key 'email'");
   }

   public async getUserByEmail(email: string): Promise<User | undefined> {
         if(email === normalUserMock.getEmail()) return normalUserMock
         if(email === adminUserMock.getEmail()) return adminUserMock
         return undefined
   }

   public async getUserById(id: string): Promise<User | undefined> {
    if(id === normalUserMock.getId()) return normalUserMock
    if(id === adminUserMock.getId()) return adminUserMock
    return undefined
   }

   public async getAllUsers(): Promise<User[]> {
      return [normalUserMock, adminUserMock]
   }
}

export default new UserDatabase()