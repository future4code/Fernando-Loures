import { Group } from "../model/group";
import { BaseDatabase } from "./BaseDatabase";

export class GroupDataBase extends BaseDatabase {

    private static TABLE_GROUP = "Group_Tables";
    private static TABLE_SHOW = "SHOWS";

    public async registerNewGroup(group: Group) {
        try {
            return await this.getConnection().insert(group).into(GroupDataBase.TABLE_GROUP)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async getGroupByName(name: string): Promise<Group> {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(GroupDataBase.TABLE_GROUP)
                .where({ name });
            return result[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async getGroupById(id: string): Promise<Group> {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(GroupDataBase.TABLE_GROUP)
                .where({ id });
            return result[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async checkSchedule(
        weekDay: string,
        startTime: string,
        endTime: string
    ): Promise<any> {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(GroupDataBase.TABLE_SHOW)
                .where({
                    week_day: weekDay,
                    start_time: startTime,
                    end_time: endTime
                });
            return result[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async scheduleConcert(
        id: string,
        idBand: string,
        weekDay: number,
        startTime: number,
        endTime: string
    ): Promise<void> {
        try {
            const result = await this.getConnection()
                .insert({
                    id: id,
                    week_day: weekDay,
                    start_time: startTime,
                    end_time: endTime,
                    band_id: idBand
                })
                .into(GroupDataBase.TABLE_SHOW);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async getSchedules(weekDay: string): Promise<any> {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(GroupDataBase.TABLE_SHOW)
                .where({ week_day: weekDay });
            console.log(result)
            return result
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
export default new GroupDataBase()