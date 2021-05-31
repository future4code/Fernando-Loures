import { IdGenerator } from "../services/IdGenerator";

export interface GroupInputDTO{
    name: string;
    music_genre: string;
    responsible: string;
}
export class Group{
    constructor(
        private id: string,
        private name: string,
        private music_genre: string,
        private responsible: string
    ){}
    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getMusicGenre(){
        return this.music_genre
    }
    public getResponsible(){
        return this.responsible
    }
    public setId(newId:string){
        this.id = newId
    }
    public setName(newName: string){
        this.name = newName
    }
    public setMusicGenre(newGender: string){
        this.music_genre = newGender
    }
    public setResponsible(newResponsible: string){
        this.responsible = newResponsible
    }
}