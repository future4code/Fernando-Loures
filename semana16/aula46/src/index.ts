import app from './app'
import connection from './connection'

app.get("/", (req, res)=>{
    res.send(' ola bom dia!.')
})

// app.post("/actor", async (req, res) => {
//     try {
//         await connection.raw(`
//         INSERT INTO ACTOR
//         (id, name, salary, birth_date, gender)
//         VALUES (
//             ${Date.now().toString()},
//             "${req.body.name}",
//             ${req.body.salary},
//             "${req.body.birthDate}",
//             "${req.body.gender}"
//             );
//             `)
            
//             res.status(201).send("Success!")
//         } catch (error) {
//             console.log(error.message);
//             res.status(500).send("An unexpected error occurred")
//         }
//     })
    
    
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

app.get("/actor/gender", async (req, res) => {
   try {
     const count = await countActors(req.query.gender as string);
     res.status(200).send({
       quantity: count,
     });
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });

 app.get("/actor/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


 const getActorById = async(id: string): Promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM ACTOR WHERE id = ${id} 
    `)
    return result[0]
 }


 const countActors = async(gender: string): Promise<any> =>{
    const result = await connection.raw(`
        SELECT count(*) AS ${gender}  FROM ACTOR 
            WHERE gender = "${gender}"; 
    `)
    return result[0]
 }

 app.put("/actor", async (req, res) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        req.body.dateOfBirth,
        req.body.gender
        );
  
      res.status(200).send();
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

 const createActor = async(id: string, name: string, salary: number, dateOfBirth: Date, gender: string): Promise<any> =>{
    const result = await connection.raw(`
        INSERT INTO ACTOR
        (id, name, salary, birth_date, gender)
        VALUES(
            "${id}",
            "${name}",
            ${salary},
            "${dateOfBirth}",
            "${gender}"
        );
    `)
 }

 const updateActor = async(id: string, salary: number): Promise<any> =>{
  const result = await connection.raw(`
      UPDATE ACTOR 
        SET salary = ${salary} 
          WHERE id="${id}";
  `)
}

const deleteActor = async(id: string): Promise<any> =>{
  const result = await connection.raw(`
      DELETE FROM ACTOR 
        WHERE id="${id}";
  `)
}

 //Exercício 4 a) 
 app.post("/actor", async (req, res) => {
  try {
    await updateActor(
      req.body.id,
      req.body.salary,);

    res.status(200).send("success!");
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

 //Exercício 4 b) 
 app.delete("/actor/:id", async (req, res) => {
  try {
    await deleteActor(
      req.params.id);

    res.status(200).send("success!");
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


// EXERCÍCIO 5



const createMovie = async(id: string, name: string, synopsis:string, release_date: Date, evaluation:number, playing_limit_date: Date): Promise<any> =>{
  const result = await connection.raw(`
  INSERT INTO FILMES
  (id, name, synopsis, release_date, evaluation, playing_limit_date)
  VALUES(
    "${id}",
      "${name}",
      "${synopsis}",
      "${release_date}",
      ${evaluation},
      "${playing_limit_date}"
  );
  `)
}

app.post("/filmes", async (req, res) => {
  try {
    await createMovie(
      req.body.id,
      req.body.name,
      req.body.synopsis,
      req.body. release_date,
      req.body.evaluation,
      req.body.playing_limit_date);
      
      res.status(200).send("success!");
    } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


// Exercício 6

  app.get("/movie/all", async (req, res) => {
    
  try{
      const result = await connection.raw(`
      SELECT * FROM FILMES LIMIT 15;
    `)
  
    res.status(201).send(result[0])
  } catch (error) {
      console.log(error.message);
      res.status(500).send("An unexpected error occurred")
      }
  })


  //Exercício 7
const searchMovie = async (val: string) : Promise<any> =>{
  const result = connection.raw(`
    SELECT * FROM FILMES 
   WHERE (name LIKE "%${val}%" OR synopsis LIKE "%${val}%")
   ORDER BY release_date; 
  `)

  return result
}

  app.get("/movie/search", async (req, res) => {

    try{
        const result = await searchMovie(
          req.query.query as string)
    
      res.status(201).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
        }
    })