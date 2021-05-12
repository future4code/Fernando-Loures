import {Nacionality, Client, Casino, verifyAge, Local} from '../src/casino';

describe("Casino", ()=>{
    test("should test verifyAge for americans and no brazilians", ()=>{
        let clientA: Client = {name:"José", nacionality: Nacionality.American, age:30 }
        let clientB: Client = {name:"Maria", nacionality: Nacionality.American, age:15 }
        let clients: Client[] = [clientA, clientB]
        let casinoA: Casino = {name: "Casino Usa", local: Local.EUA}

        let result = verifyAge(casinoA, clients)
        expect(result.americans.allowed.length).toBe(1)
        expect(result.americans.unallowed.length).toBe(1)
        expect(result.brazilians.allowed.length).toBe(0)
        expect(result.brazilians.unallowed.length).toBe(0)
    })
    test("should test verifyAge for brazilians and no americans", ()=>{
        let clientA: Client = {name:"José", nacionality: Nacionality.Brazilian, age:30 }
        let clientB: Client = {name:"Maria", nacionality: Nacionality.Brazilian, age:15 }
        let clients: Client[] = [clientA, clientB]
        let casinoA: Casino = {name: "Casino Usa", local: Local.EUA}

        let result = verifyAge(casinoA, clients)
        expect(result.americans.allowed.length).toBe(0)
        expect(result.americans.unallowed.length).toBe(0)
        expect(result.brazilians.allowed.length).toBe(1)
        expect(result.brazilians.unallowed.length).toBe(1)
    })
    test("should test verifyAge for brazilians and americans", ()=>{
        let clientA: Client = {name:"José", nacionality: Nacionality.American, age:30 }
        let clientB: Client = {name:"Maria", nacionality: Nacionality.Brazilian, age:15 }
        let clients: Client[] = [clientA, clientB]
        let casinoA: Casino = {name: "Casino Usa", local: Local.EUA}

        let result = verifyAge(casinoA, clients)
        expect(result.americans.allowed.length).toBe(1)
        expect(result.americans.unallowed.length).toBe(0)
        expect(result.brazilians.allowed.length).toBe(0)
        expect(result.brazilians.unallowed.length).toBe(1)
    })
    test("should test verifyAge for brazilians and americans in Brazil", ()=>{
        let clientA: Client = {name:"José", nacionality: Nacionality.American, age:30 }
        let clientB: Client = {name:"Maria", nacionality: Nacionality.Brazilian, age:15 }
        let clients: Client[] = [clientA, clientB]
        let casinoA: Casino = {name: "Casino Usa", local: Local.Brasil}

        let result = verifyAge(casinoA, clients)
        expect(result.americans.allowed.length).toBe(1)
        expect(result.americans.unallowed.length).toBe(0)
        expect(result.brazilians.allowed.length).toBe(0)
        expect(result.brazilians.unallowed.length).toBe(1)
    })
    test("should test verifyAge for brazilians and no americans in Brazil", ()=>{
        let clientA: Client = {name:"José", nacionality: Nacionality.Brazilian, age:30 }
        let clientB: Client = {name:"Maria", nacionality: Nacionality.Brazilian, age:15 }
        let clients: Client[] = [clientA, clientB]
        let casinoA: Casino = {name: "Casino Usa", local: Local.Brasil}

        let result = verifyAge(casinoA, clients)
        expect(result.americans.allowed.length).toBe(0)
        expect(result.americans.unallowed.length).toBe(0)
        expect(result.brazilians.allowed.length).toBe(1)
        expect(result.brazilians.unallowed.length).toBe(1)
    })
    test("should test verifyAge for only americans in Brazil", ()=>{
        let clientA: Client = {name:"José", nacionality: Nacionality.American, age:30 }
        let clientB: Client = {name:"Maria", nacionality: Nacionality.American, age:15 }
        let clients: Client[] = [clientA, clientB]
        let casinoA: Casino = {name: "Casino Usa", local: Local.Brasil}

        let result = verifyAge(casinoA, clients)
        expect(result.americans.allowed.length).toBe(1)
        expect(result.americans.unallowed.length).toBe(1)
        expect(result.brazilians.allowed.length).toBe(0)
        expect(result.brazilians.unallowed.length).toBe(0)
    })
})