import { generateId } from "../services/idGenerator";

export default class UserStore {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) {
        console.log("usuario da loja criado")
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    getId() { return this.id }
    getName() { return this.name; }
    getEmail() { return this.email; }
    introduceYourself() {
        console.log(`Olá bom dia, sou ${this.getName()}!`)
    }
}

export class Customer extends UserStore {
    private cardNumber: string;
    public purchase: number = 0;
    constructor(
        cardNumber: string,
        purchase: number,
        id: string,
        name: string,
        email: string,
        password: string
    ) {
        super(id, name, email, password)
        this.cardNumber = cardNumber;
        this.purchase = purchase;
        console.log("esse tbm é cliente")
    }
    getCardNumber() { return this.cardNumber }
}

export class Employee extends UserStore {
    static BENEFITS_VALUE: number = 400
    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        protected admissionDate: string,
        protected baseSalary: number,
    ) {
        super(id, name, email, password);
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }
    getBaseSalary() { return this.baseSalary }
    getAdmissionDate() { return this.admissionDate }
    calculateTotalSalary() { return this.baseSalary + Employee.BENEFITS_VALUE }
}

export class Seller extends Employee {
    static SELLING_COMMISSION: number = 5;
    private salesQuantity: number = 0;
    setSalseQuantity(quantity: number){
        this.salesQuantity= quantity;
    } 
    getSalesQuantity(){return this.salesQuantity}
    calculateTotalSalary(){return this.baseSalary + this.getSalesQuantity()*Seller.SELLING_COMMISSION + Seller.BENEFITS_VALUE }
}