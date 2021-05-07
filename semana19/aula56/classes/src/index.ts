import app from "./controller/app"
import taskRouter from "./routers/taskRouter"
import userRouter from "./routers/userRouter"
import UserStore, { Customer, Employee, Seller } from './model/usersStore'
import { generateId } from "./services/idGenerator"
import { Client } from "./model/place"

app.use('/user', userRouter)
app.use('/task', taskRouter)

// aula 57 Herança
const aula57 = () => {
    const user = new UserStore(generateId(), "Joao", "joao@joao.com", "joaosenha")
    const customer = new Customer('123456789', 25.00, generateId(), "Maria", "maria@maria.com", "senha")
    console.log(
        customer.getId(),
        customer.getName(),
        customer.getEmail(),
        customer.getCardNumber(),
        customer.purchase,
    )
    customer.introduceYourself()
    const employee = new Employee(generateId(), "Maria", "maria@maria.com", "senha", "25/05/2020", 3000.00)
    console.log(employee.getAdmissionDate())
    console.log(employee.calculateTotalSalary())

    const seller = new Seller(generateId(), "Carlos", "maria@maria.com", "senha", "25/05/2030", 4000.00)
    console.log(
        seller.getAdmissionDate(),
        seller.getName(),
        seller.getId(),
        seller.getBaseSalary(),
        seller.calculateTotalSalary()
    )

    seller.introduceYourself()
    seller.setSalseQuantity(59)
    console.log(seller.getSalesQuantity())
    console.log(seller.calculateTotalSalary());

    console.log("**********************************fim**********************************")
}
aula57()
// 1. a) Possível seria imprimir o password. Entrento, não seria seguro.

//b) A mensagem foi impressa no console apenas uma vez.

//  2. 
// a) A mensagem foi impressa no console apenas uma vez. E a mensagem da classe Customer também apenas uma vez.

//  3. a) O password não foi impresso, pois não tem método get para acessálo

// 6. a) A instância da classe Employee imprimiu uma vez no console.
// b)
// 7. A instância da classe Seller tem acesso a todos os métodos e atributos da classe Employee e UserStore.

const polimorfismo = () => {
    const cliente: Client = {
        name: "joao",
        registrationNumber: 1223,
        consumedEnergy: 122,
        calculateBill: () => { return 2 }
    }
    console.log(cliente)
}
polimorfismo()