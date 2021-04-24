export type authenticationData = {
   id: string,
   role: string
}
export type userCredentials = {
   email: string
   password: string
}
export enum userRole {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}
export type user = { id: string, email: userCredentials, password: string, role: userRole }