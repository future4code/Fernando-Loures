import express, {Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app = express()

app.use(express.json())
app.use(cors())

type bill ={
    value: number,
    date: string,
    description: string
}

type client ={
    id: number,
    name: string,
    cpf: string,
    birth_date: string,
    cash_balance: number,
    bank_statement: Array <bill>
}

const clients: Array<client> = [ 
{
    name: 'Mateus da Silva',
    cpf: 'xxx.xxx.xxx-xx',
    birth_date: '1990/01/03',
    cash_balance: 0,
    bank_statement: [],
    id: 1
  },
  {
    name: 'joao da Silva',
    cpf: '123.xxx.xxx-xx',
    birth_date: '2000/01/03',
    cash_balance: 100,
    bank_statement: [],
    id: 2
  }
]

app.get('/bank/users',(req:Request, res:Response)=>{
    res.status(200).send(clients)
})

// 1 create account
function getAge(dateString:string) : number 
{
    const today: Date = new Date();
    const birthDate : Date = new Date(dateString);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const m: number= today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

app.post('/', (req:Request, res:Response)=>{
    let errorCode:number = 400
    try {      
        if(!req.body.name || !req.body.cpf || !req.body.birth_date){
            errorCode=404
            throw new Error("Applyment not completed.")
        }
        const age: number = getAge(req.body.birth_date)
        if(age<18){
            errorCode=404
            throw new Error("Client is too young.")
        }
        clients.map(client=>{
            if(client.cpf === req.body.cpf){
                errorCode=404
                throw new Error(`this ${client.cpf} already exist.`)
            }
        })

        clients.push({...req.body,cash_balance: 0, bank_statement:[], id: clients.length+1})
        console.log(clients)        
        res.status(200).send(`Novo cliente ${req.body.name}, criado com sucesso.`)
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
        
})
//2 Pegar o saldo

app.get('/bank/:cpf/:name',(req:Request, res:Response)=>{
    let errorCode:number = 400
    try {
        const cpf = req.params.cpf
        const name = req.params.name
        const client:client | undefined = clients.find(c=> c.cpf === cpf && c.name === name)

        if(!client){
            errorCode = 404
            throw new Error(`cpf not found.`)
        }

        res.status(200).send(`${client.cash_balance}`)

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
})

//3 adicionar saldo
app.patch('/bank/',(req:Request, res:Response)=>{
    let errorCode:number = 400
    try {
        const cpf: string = req.body.cpf
        const name: string = req.body.name
        const deposit: number = req.body.deposit

        const client:client | undefined = clients.find(c=> c.cpf === cpf && c.name === name)
        console.log(name)
        console.log(cpf)
        console.log(client)
        if(!client){
            errorCode = 404
            throw new Error(`cpf not found.`)
        }
        client.cash_balance += deposit
        console.log(clients)

        res.status(200).send(`Novo saldo: ${client.cash_balance}`)

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
})

//4 pagar conta
app.post('/bank/',(req:Request, res:Response)=>{
    let errorCode:number = 400
    try {
        const cpf: string = req.body.cpf
        const name: string = req.body.name
        const client:client | undefined = clients.find(c=> c.cpf === cpf && c.name === name)
        if(!client){
            errorCode = 404
            throw new Error(`cpf not found.`)
        }

        const new_bill: bill = {
            value: req.body.value,
            date: req.body.date||new Date(),
            description: req.body.description 
        }
       const today: Date = new Date()
       const billDate: Date= new Date(new_bill.date)
       console.log(billDate)
       if(billDate < today){
            throw new Error("Date is not valid.");
       }
       if(new_bill.value > client.cash_balance){
           throw new Error("Balance is insufficient.");
       }
       console.log(new_bill)

        res.status(200).send(`${new_bill.description} is schedule, R$${new_bill.value},00 - ${new_bill.date}`)

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
})

//4 Transferência

app.post('/bank/:name/:cpf/transfer/',(req:Request, res:Response)=>{
    let errorCode:number = 400
    try {
        const cpf: string = req.params.cpf
        const name: string = req.params.name
        const client:client | undefined = clients.find(c=> c.cpf === cpf && c.name === name)
        if(!client){
            errorCode = 404
            throw new Error(`cpf not found.`)
        }
        
        const transferCpf: string = req.body.cpf_transfer
        const transferName: string = req.body.name_transfer

        if(transferCpf === cpf){
            errorCode = 404
            throw new Error(`It can not transfer by the same account.`)
        }


        const clientTransfer :client | undefined = clients.find(c=> c.cpf === transferCpf && c.name === transferName)
        if(!clientTransfer){
            errorCode = 404
            throw new Error(`cpf to transfer not found.`)
        }
        const new_transfer: bill = {
            value: req.body.value,
            description: "transfer",
            date: req.body.date||new Date()
        }
        if(new_transfer.value > client.cash_balance){
            throw new Error("Balance is insufficient.");
        }

        client.bank_statement.push({...new_transfer, value: -req.body.value})
        client.cash_balance -= req.body.value

        clientTransfer.bank_statement.push({...new_transfer})
        clientTransfer.cash_balance += req.body.value
        
        console.log(clients)
        clients.map(c=>{
            console.log(c.bank_statement)
        })

        res.status(200).send(`Transferência realizada com sucesso!`)

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
