import app from './app'
import {getAllUsers, getUser, getUserByType, getOrderUsers, getUsersByPage, getEveryThing} from './function/function'


app.get("/users", getAllUsers)

//  a) Crie uma cópia do endpoint acima, e altere-o para 
// que ele possa receber um parâmetro de filtragem por nome. Este nome deve ser enviado por query params.

app.get("/user?", getUser)

// b) Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por tipo de user.
//  O tipo de user deve ser passado por path params.

app.get("/users/:type", getUserByType)

// Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. 
// A ordenação padrão deve ser crescente,  e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.

app.get("/order/users/:orderby", getOrderUsers)
app.get("/order/users/", getOrderUsers)

// Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, 
// e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por query params.

app.get("/page/users?", getUsersByPage)

// - Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
// - Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
// - Caso o usuário não forneça número de página, deve começar na página 1

app.get("/aula/:orderby/users?", getEveryThing)