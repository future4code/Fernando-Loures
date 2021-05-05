import { loginInput, user, User } from "../model/user";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { HashManager } from "../services/hashManager";
import { generateToken } from "../services/authenticator";

export async function loginBusiness(input: loginInput): Promise<string> {
   try {

      if (!input.email || !input.password) {
         throw new Error("'email' e 'senha' são obrigatórios")
      }

      const user: User = await selectUserByEmail(input.email);
      console.log(user);

      if (!user) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }

      const hm = new HashManager(15);
      const passwordIsCorrect: boolean = await hm.compare(input.password, user.getPassword())
      user.setPassword(input.password);
      console.log(user);
      if (!passwordIsCorrect) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }

      const token: string = generateToken({
         id: user.getId(),
         role: user.getRole()
      });

      return token;

   } catch (error) {
      throw new Error(error.message);
   }
}