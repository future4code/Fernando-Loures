import connection from '../connection'
import app from '../app'

app.post("/actor", async (req, res) =>{
    try {
        await connection.raw(
            `INSERT INTO ACTOR 
                (id, name, salary, birth_date, gender)
            VALUES (
                ${Date.now().toString()},
                "${req.body.name}",
                ${req.body.salary},
                "${req.body.birtshDate}",
                "${req.body.gender}",s
            );`
        )
        res.status(201).send("Success!")
    } catch (error){
        console.log(error.mensage);
        res.status(500).send("An unexpected error ocurred")
    }
})


app.get("/actor", async (req, res) =>{
    try {
        await connection.raw(
            `SELECT * FROM ACTOR;`
        )
        res.status(201).send("Success!")
    } catch (error){
        console.log(error.mensage);
        res.status(500).send("An unexpected error ocurred")
    }
})