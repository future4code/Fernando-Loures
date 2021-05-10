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

type transaction={
   date: Date,
   value: number,
   description: string
}
class Transaction{
   private date: Date;
   private value: number;
   private description: string;

constructor(date:Date, value: number, description: string){
   this.date = date;
   this.value = value; 
   this.description = description;
}
   getDate(): Date {return this.date};
   getValue(): number{return this.value};
   getDescription(): string {return this.description}

}

class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: transaction[] = [];

   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }
   getCpf(): string {return this.cpf};
   getName(): string {return this.name};
   getAge(): number {return this.age};
   getBalance(): number {return this.balance};
   getTransactions(): transaction[] {return this.transactions};
   setTransaction(newTransaction:transaction):void {
      this.transactions.push(newTransaction)
   };
   setBalance(): void{
      let sum: number = 0
      this.transactions.map(trans=>{
         sum += trans.value
      })
      this.balance = sum
   }
}

class bank {
   private accounts: UserAccount[];
   constructor(accounts: UserAccount[]){
      this.accounts=accounts
   }
   getAccounts(): UserAccount[]{
      return this.accounts
   }
}

const user = new UserAccount("cpf123", "joao123", 29)
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