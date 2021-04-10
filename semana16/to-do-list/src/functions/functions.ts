import connection from '../connection'
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
    let err = 400
    try {
        const result = await connection.raw(
            `
            INSERT INTO USERS (NAME, NICKNAME, EMAIL)
                VALUES (
                    "${req.body.name}",
                    "${req.body.nickname}",
                    "${req.body.email}"
                );
            `
        )

        res.status(201).send("Success!")

    } catch (err) {
        res.status(400).send(err)
    }
}

export const getUsers = async (req: Request, res: Response) => {
    let err = 400
    try {
        const result = await connection.raw(
            `
            SELECT * FROM USERS;
             `
        )
        res.status(201).send(result[0])

    } catch (err) {
        res.status(400).send(err)
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM USERS WHERE ID = ${req.params.id}; 
        `)
        res.status(200).send(result[0])
    } catch (err) {
        res.status(400).send(err)
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
            UPDATE USERS 
            SET name = "${req.body.name}", 
                nickname = "${req.body.nickname}",
                email = "${req.body.email}" 
            where id= ${req.params.id};
        `)
        res.status(200).send(result[0])
    } catch (err) {
        res.status(400).send(err)
    }
}

export const createTask = async (req: Request, res: Response) => {
    let err = 400
    try {
        const result = await connection.raw(`
            INSERT INTO TASKS (TITLE , DESCRIPTION ,LIMIT_DATE ,STATUS, USER_CREATOR)
                VALUES(
                    "${req.body.title}",
                    "${req.body.description}",
                    "${req.body.limit_date}",
                    "${req.body.status}",
                    "${req.body.user_creator}"
                );
        `)
        res.status(201).send("Success!")
    } catch (err) {
        res.status(400).send(err)
    }
}


export const getTasks = async (req: Request, res: Response) => {
    let err = 400
    try {
        const result = await connection.raw(
            `
            SELECT * FROM TASKS;
             `
        )
        res.status(200).send(result[0])

    } catch (err) {
        res.status(400).send(err)
    }
}


export const getTaskById = async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM TASKS WHERE ID = ${req.params.id}; 
        `)
        res.status(200).send(result[0])
    } catch (err) {
        res.status(400).send(err)
    }
}

export const getTaskByCreator = async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM TASKS WHERE USER_CREATOR = "${req.params.creator}"; 
        `)
        res.status(200).send(result[0])
    } catch (err) {
        res.status(400).send(err)
    }
}

export const setTaskResponsability = async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
            INSERT INTO RELATIONAL_USERS_TASKS (USER_ID, TASK_ID) VALUES(
                ${req.body.user_id},
                ${req.body.task_id}
            ); 
        `)
        res.status(200).send(result[0])
    } catch (err) {
        res.status(400).send(err)
    }
}

export const getTaskResponsability = async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
        SELECT * FROM RELATIONAL_USERS_TASKS
        JOIN USERS
        ON USER_ID = USERS.ID
        JOIN TASKS
        ON TASK_ID = TASKS.ID;
        
        `)
        res.status(200).send(result[0])
    } catch (err) {
        res.status(400).send(err)
    }
}



export const searchUser = async (req: Request, res: Response) => {
    const queryUser = req.query.query
    try {
        const result = await connection.raw(`
            SELECT * FROM USERS 
                WHERE NAME LIKE "%${queryUser}%" OR
                      NICKNAME LIKE "%${queryUser}%";
        `)
        res.status(200).send(result[0])
    } catch (err) {
        res.status(400).send(err)
    }
}

export const getStatus = async (req: Request, res: Response) => {
    const status = req.query.status === "todo" ? "to do" : req.query.status 
    
    try {
        const result = await connection.raw(`
            SELECT * FROM TASKS 
                WHERE STATUS = "${status}";
        `)
        res.status(200).send(result[0])
    } catch (err) {
        res.status(400).send(err)
    }
}