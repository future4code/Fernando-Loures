import express, {Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// *a. Qual método HTTP você deve utilizar para isso?*
//  O método GET.
// *b. Como você indicaria a **entidade** que está sendo manipulada?*
// A entidade é o objeto users

//1 

app.get('/users', (req: Request, res: Response) =>{
    res.status(200).send(users)
})

//2
// Passei por path params, porque é apenas um valor por vez.
// Seguindo a dica do exercício, usar enum.

app.get('/users/search', (req: Request, res: Response) =>{
    let errorCode: number = 400
    try{
        const myUsers = users.filter((user)=>{
            return user.type === req.query.type
        })
        console.log(myUsers)
        if(!myUsers.length){
            errorCode = 404;
            throw new Error("User not found")
        }
        res.status(200).send(myUsers)

    }catch (error){
        res.status(errorCode).send({message: error.message}) 
    }

})

//3
// Passei por query paramaters.



app.get('/users/:name', (req: Request, res: Response) =>{
    let errorCode: number = 400
    try{
        const myUsers = users.filter((user)=>{
            return user.name === req.params.name
        })
        console.log(myUsers)
        if(!myUsers.length){
            errorCode = 404;
            throw new Error("User not found")
        }
        res.status(200).send(myUsers)

    }catch (error){
        res.status(errorCode).send({message: error.message}) 
    }

})

//4
// A utilização dos métodos post e put não alteraram os resultados. Como não há verificações e consultas
// o método put seria adequado para este caso.

app.post('/users/', (req: Request, res: Response) =>{
// app.put('/users/', (req: Request, res: Response) =>{
    let errorCode: number = 400
    try{
        users.push(req.body)
        res.status(200).send(`Novo usuário, ${req.body.name}`)

    }catch (error){
        res.status(errorCode).send({message: error.message}) 
    }

})

//5
app.put('/users/:id', (req: Request, res: Response) =>{
    let errorCode: number = 400
    try{
        const myUser = users.find((user)=> user.id === parseInt(req.params.id))
        if(!myUser){
            errorCode=404
            throw new Error("User not found")
        }
    
        myUser.name = req.body.name + " Alterado"

        res.status(200)

    }catch (error){
        res.status(errorCode).send({message: error.message}) 
    }

})

//6
app.patch('/users/:id', (req: Request, res: Response) =>{
    let errorCode: number = 400
    try{
        const myUser = users.find((user)=> user.id === parseInt(req.params.id))
        if(!myUser){
            errorCode=404
            throw new Error("User not found")
        }
    
        myUser.name = req.body.name + " -Realterado"

        res.status(200).send("ok")

    }catch (error){
        res.status(errorCode).send({message: error.message}) 
    }

})


//7
app.delete('/users/:id', (req: Request, res: Response) =>{
    let errorCode: number = 400
    try{
        const myUser = users.find((user)=> user.id === parseInt(req.params.id))
        if(!myUser){
            errorCode=404
            throw new Error("User not found")
        }
        const index = users.indexOf(myUser)
        users.splice(index,1)
    
        res.status(200).send(users)

    }catch (error){
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
  

//   curl -s -XPOST -H 'Content-type: application/json' \
//   -d '{ "id": 6, "name": "Fred", "email": "fred@email.com", "type": "UserType.ADMIN", "age": 60}' \
//   localhost:3003/users/

