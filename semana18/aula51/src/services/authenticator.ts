import * as jwt from "jsonwebtoken"
import { authenticationData } from "../type"
import dotenv from "dotenv"

dotenv.config()

export const generateToken = (
   payload: authenticationData
): string => jwt.sign(
      payload,
      String(process.env.JWT_KEY),
      { expiresIn: "1h" }
   )

export const getTokenData = (
   token: string
): authenticationData | null => {
   try {
      const { id, role } = jwt
      .verify(token, String(process.env.JWT_KEY)) as authenticationData
      console.log("opa ",id, role , token)
      return { id, role }
   } catch (error) {    
      console.log(error.message);
      return null
   }
}
