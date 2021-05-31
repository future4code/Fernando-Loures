import { GroupDataBase } from "../data/GroupDataBase";
import { BaseError } from "../error/BaseError";
import { Group, GroupInputDTO } from "../model/group";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class GroupBusiness {
    constructor(
        private idgenerator: IdGenerator,
        private groupDataBase: GroupDataBase,
        private authenticator: Authenticator
    ) { }
    public async groupRegister(group: GroupInputDTO, token: string | undefined) {
        if (!token)
            throw new BaseError("not authorized", 400);
        if (!group.name || !group.music_genre || !group.responsible)
            throw new BaseError("Not valid inputs", 422);
        const validator = this.authenticator.getData(token)
        if (!validator || validator.role !== UserRole.ADMIN)
            throw new BaseError("not authorized", 400);
        const id = this.idgenerator.generate()
        const groupToSave = new Group(
            id,
            group.name,
            group.music_genre,
            group.responsible
        )
        return await this.groupDataBase.registerNewGroup(groupToSave)
    }

    public async details(
        id: any,
        name: any,
        token: string | undefined
    ) {
        if (!token)
            throw new BaseError("not authorized", 400);
        if (!name && !id)
            throw new BaseError("Not valid inputs", 422);
        const validator = this.authenticator.getData(token)
        if (!validator || validator.role !== UserRole.ADMIN)
            throw new BaseError("not authorized", 400);
        if (name) {
            const groupDetails = await this.groupDataBase.getGroupByName(name)
            return groupDetails
        }
        const groupDetails = await this.groupDataBase.getGroupById(id)
        return groupDetails
    }
    public async scheduleConcert(
        idBand: any,
        weekDay: any,
        startTime: any,
        endTime: any,
        token: undefined | string
    ) {
        if (!idBand || !weekDay || !startTime || !endTime)
            throw new BaseError("invalid inputs", 403);
        if (!token)
            throw new BaseError("not authorized", 400);
        const validator = this.authenticator.getData(token)
        if (!validator)
            throw new BaseError("not authorized", 400);
        const occupied = await this.groupDataBase.checkSchedule(weekDay, startTime, endTime)
        if (occupied)
            throw new BaseError("Event time is not available", 400);
        const id = this.idgenerator.generate()
        await this.groupDataBase.scheduleConcert(
            id,
            idBand,
            weekDay,
            startTime,
            endTime
        )
        const res = await this.groupDataBase.getGroupById(id)
        return res
    }
    public async getSchedules(
        weekDay: any,
        token: undefined | string
    ) {
        if (!weekDay)
            throw new BaseError("not found", 404);
        if (!token)
            throw new BaseError("not authorized", 400);
        const validator = this.authenticator.getData(token)
        if (!validator)
            throw new BaseError("not authorized", 400);
        const id = this.idgenerator.generate()
        const res = await this.groupDataBase.getSchedules(weekDay)
        return res
    }
}