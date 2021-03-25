import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'
import { AddressInfo } from "net";

const app = express()
app.use(express.json())
app.use(cors())

app.get('/countries/all' , (req: Request, res: Response ) => {
    const countriesIdName =  countries.map(country=>{
        return ({
            id: country.id,
            name: country.name
        })
    })
    res.status(200).send(countriesIdName )
})


app.get('/countries/search' , (req: Request, res: Response ) => {
    let result: country[] = countries
    
    if(req.query.name){
        result = result.filter(
            country => country.name.includes(req.query.name as string )
            )
        }
        
        if(req.query.capital){
            result = result.filter(
                country => country.capital.includes(req.query.capital as string )
                )
    }

    if(req.query.continent){
        result =  result.filter(
            country => country.continent.includes(req.query.continent as string )
            )
        }
    if(!req.query.name && !req.query.capital && !req.query.continent){
            res.status(404).send("Not found")
        }
        
    res.status(200).send(result)

})

app.get('/countries/:id' , (req: Request, res: Response ) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    if (result){
        res.status(200).send(result)
    } else{
        res.status(404).send("Not found")
    }
})

app.put("countries/edit/:id", (req: Request, res: Response)=>{
    let errorCode: number = 400
    try {
        if(!req.body.name || !req.body.capital){
            errorCode = 401
            throw new Error()
        }
    
        const index: number = countries.findIndex(
            country => country.id === Number(req.params.id)
        ) 

        if (index === -1){
            errorCode = 404
            throw new Error()
        }
    
        countries[index].name = req.body.name
        countries[index].capital = req.body.capital
    
        res.status(200).end()
        
    } catch (error) {
        console.log(error)
        res.status(errorCode).end()
    }

})



const server = app.listen(process.env.PORT || 3003, () => {

    if (server) {

        const address = server.address() as AddressInfo ;

        console.log(`Server is running in http://localhost:${address.port}`);

    } else {

        console.error(`Failure upon starting server.` );
 }
});