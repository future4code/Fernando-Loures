import { Commerce, Industry, Residence } from "./place";

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

export class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

export class ComercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cnpj;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}

class IndustryClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpjIndustry: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCnpjIndustry(): string {
    return this.cnpjIndustry;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

export class ManagementClient {
  constructor(private clientsList: Array<Client>) {
    this.clientsList = clientsList
  }
  getClientList() { return this.clientsList }
  getClientsQuantity() { return this.clientsList.length }
  registerClient(client: Client) { this.clientsList.push(client) }
  foundClient(registrationNumber:number):Client | undefined{
    return this.clientsList.find(client => {
      client.registrationNumber == registrationNumber
    })
  }
  calculateBillOfClient(registrationNumber: number): number|undefined {
    const foundClient = this.foundClient(registrationNumber)
    if (foundClient) { return foundClient.calculateBill() }
  }
  deleteClient(registrationNumber: number):void {
    const foundClient = this.foundClient(registrationNumber)
    if (foundClient) { 
      const index =this.clientsList.indexOf(foundClient)
      this.clientsList.slice(index,index+1)
    }
  }
  calculateTotalIncome(): number{
    let totalIncome: number = 0
    this.clientsList.map(client=>{
      totalIncome += client.calculateBill()
    })
    return totalIncome
  }
}