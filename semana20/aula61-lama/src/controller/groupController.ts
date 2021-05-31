import { Request, Response } from "express";
import { weekdays } from "moment";
import { idText } from "typescript";
import { GroupBusiness } from "../business/GroupBusiness";
import GroupDataBase from "../data/GroupDataBase";
import { GroupInputDTO } from "../model/group";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

export class GroupController {

    public async register(req: Request, res: Response) {
        try {
            const input: GroupInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible
            }
            const token: string | undefined = req.headers.authorization
            const groupBusiness = new GroupBusiness(
                IdGenerator,
                GroupDataBase,
                Authenticator
            )
            await groupBusiness.groupRegister(input, token)
            res.status(200).send("Success")
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    public async detailsGroup(req: Request, res: Response) {
        try {
            const id = req.query.id
            const name = req.query.name
            const token: string | undefined = req.headers.authorization
            const groupBusiness = new GroupBusiness(
                IdGenerator,
                GroupDataBase,
                Authenticator
            )
            const groupDetails = await groupBusiness.details(id, name, token)
            res.status(200).send(groupDetails)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    public async scheduleConcert(req: Request, res: Response) {
        try {
            const idBand = req.body.band_id
            const weekDay = req.body.week_day
            const startTime = req.body.start_time
            const endTime = req.body.end_time

            const token: string | undefined = req.headers.authorization
            const groupBusiness = new GroupBusiness(
                IdGenerator,
                GroupDataBase,
                Authenticator
            )
            await groupBusiness.scheduleConcert(idBand, weekDay, startTime, endTime, token)
            res.status(200).send("Success")
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    public async getSchedules(req: Request, res: Response) {
        try {
            const weekDay = req.params.week_day
            const token: string | undefined = req.headers.authorization
            const groupBusiness = new GroupBusiness(
                IdGenerator,
                GroupDataBase,
                Authenticator
            )
            const result = await groupBusiness.getSchedules(weekDay, token)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

}