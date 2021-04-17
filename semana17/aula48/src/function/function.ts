import connection from '../connection'
import { Request, Response } from 'express'
import { stringify } from 'node:querystring'

export async function selectAllUsers(): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)

    return result[0]
}

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    console.log("entrei")
    try {
        const users = await selectAllUsers()

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}


// exercicio A
export async function selectUser(name: any): Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio 
            WHERE name LIKE "%${name}%"; 
    `)

    return result[0]
}

export const getUser = async (req: Request, res: Response): Promise<void> => {
    const name = req.query.name
    try {
        const users = await selectUser(name)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

// exercicio B 
export async function selectUserByType(type: any): Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio 
            WHERE type = "${type}"; 
    `)

    return result[0]
}

export const getUserByType = async (req: Request, res: Response): Promise<void> => {
    const type = req.params.type
    try {
        const users = await selectUserByType(type)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}


// exercicio 2
export async function selectOrderUsers(orderby: any): Promise<any> {
    console.log(orderby)
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio 
            ORDER BY ${orderby} ASC; 
    `)

    return result[0]
}

export const getOrderUsers = async (req: Request, res: Response): Promise<void> => {
    const orderby = req.params.orderby && (req.params.orderby === "name" || req.params.orderby === "type")
        ? req.params.orderby : "email"
    try {
        const users = await selectOrderUsers(orderby)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}


export async function selectUsersByPage(page: any): Promise<any> {
    console.log(page)
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio 
            ORDER BY name ASC
            LIMIT 5 OFFSET ${page * 5}; 
    `)

    return result[0]
}

export const getUsersByPage = async (req: Request, res: Response): Promise<void> => {
    const page = req.query.page || 1
    try {
        const users = await selectUsersByPage(page)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}


export async function selectEveryThing(name: any, type: any, orderby: any, page: any): Promise<any> {
    const order = orderby ? "ASC" : "DESC"
    orderby = orderby || "name"
    let result: any
    if (!name && !type) {
        result = await connection.raw(`
       SELECT * FROM aula48_exercicio 
            ORDER BY ${orderby} ${order}
            LIMIT 5 OFFSET ${page * 5}; ; 
    `)
    } else if (name && !type) {
        result = await connection.raw(`
       SELECT * FROM aula48_exercicio 
            WHERE name LIKE "%${name}%"
            ORDER BY ${orderby} ${order}
            LIMIT 5 OFFSET ${page * 5}; ; 
    `)
    } else if (!name && type) {
        result = await connection.raw(`
       SELECT * FROM aula48_exercicio 
            WHERE type = "${type}"
            ORDER BY ${orderby} ${order}
            LIMIT 5 OFFSET ${page * 5}; ; 
    `)
    } else if (name && type) {
        result = await connection.raw(`
       SELECT * FROM aula48_exercicio 
            WHERE name LIKE "%${name}%" OR type = "${type}"
            ORDER BY ${orderby} ${order}
            LIMIT 5 OFFSET ${page * 5}; ; 
    `)
    }


    return result[0]
}

export const getEveryThing = async (req: Request, res: Response): Promise<void> => {
    const page = req.query.page || 1
    const orderby = req.params.orderby
    const name = req.query.name
    const type = req.query.type


    try {
        const users = await selectEveryThing(name, type, orderby, page)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
