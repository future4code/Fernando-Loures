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


app.get('users/search', (req: Request, res: Response) =>{
    const usersSelected = users.find((user) => user.type === req.query.type)

    res.status(200).send(usersSelected)
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
