export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type AuthenticationData = {
    id: string,
    role: USER_ROLES
}

export type signupUser = {
    email: string,
    name: string,
    password: string,
    role: USER_ROLES
}
export type userData = {
    id: string,
    email: string,
    name: string,
    password: string,
    role: USER_ROLES
}
export type loginData = {
    email: string,
    password: string
}
export type deleteData = {
    id: string,
    token: string
}
export const convertRoleToAuthentication = (role:string):USER_ROLES => {
    switch (role) {
        case "NORMAL":
            return USER_ROLES.NORMAL
            break;
        case "ADMIN":
            return USER_ROLES.ADMIN
            break;
        default:
            return USER_ROLES.NORMAL
            break;
    }
}