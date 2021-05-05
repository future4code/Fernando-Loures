export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type user = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export class User {

   private id: string;
   private name: string;
   private nickname: string;
   private email: string;
   private password: string;
   private role: USER_ROLES;

   constructor(
      id: string,
      name: string,
      nickname: string,
      email: string,
      password: string,
      role: USER_ROLES
   ) {
      this.id = id;
      this.name = name;
      this.nickname = nickname;
      this.email = email;
      this.password = password;
      this.role = role;
   }

   getId(): string {return this.id};
   getName(): string {return this.name};
   getNickname(): string {return this.nickname};
   getEmail(): string {return this.email};
   getPassword(): string {return this.password};
   getRole(): USER_ROLES {return this.role};

   setPassword(password: string): void {this.password = password}

}

export type signupInput = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: string
}

export type loginInput = {
   email: string,
   password: string
}

export function convertStringToUserRole(role: string): USER_ROLES {
   switch (role) {
      case "NORMAL":
         return USER_ROLES.NORMAL;
      case "ADMIN":
         return USER_ROLES.ADMIN;
      default:
         throw new Error("O user role precisa ser 'NORMAL' ou 'ADMIN'")
   }
}