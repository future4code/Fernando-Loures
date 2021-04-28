import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from "dotenv"
dotenv.config()

export const generateToken = (
  input: authenticationData
): string => {
  return jwt.sign(
    input,
    process.env.JWT_KEY!,
    { expiresIn: "24d" }
  )
}
export const getData = (
  token: string
): authenticationData | null => {
  try {
    const { id, email} = jwt.verify(token, process.env.JWT_KEY!) as authenticationData
    return { id, email};
  } catch (err) {
    console.log(err.message)
    return null
  }
};
