import app from './app'
import connection from './connection'

app.get("/", (req, res)=>{
    res.send(' ola bom dia!.')
})

app.post("/actor", async (req, res) => {
    try {
    await connection.raw(`
    INSERT INTO ACTOR
    (id, name, salary, birth_date, gender)
    VALUES (
        ${Date.now().toString()},
        "${req.body.name}",
        ${req.body.salary},
        "${req.body.birthDate}",
        "${req.body.gender}"
        );
    `)

    res.status(201).send("Success!")
    } catch (error) {
    console.log(error.message);
    res.status(500).send("An unexpected error occurred")
    }
 })


app.get("/actor", async (req, res) => {
    try {
    const result = await connection.raw(`
    SELECT * FROM ACTOR;
    `)

    res.status(201).send(result[0])
    } catch (error) {
    console.log(error.message);
    res.status(500).send("An unexpected error occurred")
    }
 })


 const actorByName = async(name: string):promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM ACTOR WHERE name = ${name} 
    `)
    return result[0]
 }

 const actorByGender = async(gender: string):promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM ACTOR WHERE name = ${name} 
    `)
    return result[0]
 }