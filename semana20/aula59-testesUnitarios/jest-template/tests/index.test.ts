import {Character, performAttack, validateCharacter} from "../src/index";
describe("ValidadeCharacter", ()=>{
    it("Should return false for a not valid character", ()=>{
        const input: Character = {
            name: "",
            life: 50,
            defense: 30,
            strength: 20
        }
        const res= validateCharacter(input)
        expect(res).toBe(false)
    })
    it("Should return false for life =0", ()=>{
        const input: Character = {
            name: "jogador1",
            life: 0,
            defense: 30,
            strength: 20
        }
        const res= validateCharacter(input)
        expect(res).toBe(false)
    })
    it("Should return false for strength =0", ()=>{
        const input: Character = {
            name: "jogador1",
            life: 50,
            defense: 30,
            strength: 0
        }
        const res= validateCharacter(input)
        expect(res).toBe(false)
    })
    it("Should return false for defense =0", ()=>{
        const input: Character = {
            name: "jogador1",
            life: 50,
            defense: 0,
            strength: 20
        }
        const res= validateCharacter(input)
        expect(res).toBe(false)
    })
    it("Should return false for life or defense or strength < 0", ()=>{
        const input: Character = {
            name: "jogador1",
            life: 50,
            defense: -20,
            strength: 20
        }
        const res= validateCharacter(input)
        expect(res).toBe(false)
    })
    it("Should return true for a valid Character", ()=>{
        const input: Character = {
            name: "jogador1",
            life: 50,
            defense: 20,
            strength: 20
        }
        const res= validateCharacter(input)
        expect(res).toBe(true)
    })
})

describe("PerformAttack",()=>{
    it("Should perform a valid attack", ()=>{
        expect.assertions(4)
        const mock1 = jest.fn(()=>{
            return true
        })
        const char1: Character = {name:"char1", life:10, defense:40, strength:40}
        const char2: Character= {name:"char1", life:10, defense:40, strength:40}

        const res = performAttack(char1, char2, mock1) 
        expect(res).toBe(undefined)
        expect(mock1).toHaveBeenCalled()
        expect(mock1).toBeCalledTimes(2)
        expect(mock1).toReturnTimes(2)
    })
    it("Should perform an invalid attack", ()=>{
        expect.assertions(5)
        const mock1 = jest.fn(()=>{
            return false
        })
        const char1: Character = {name:"char1", life:10, defense:-40, strength:40}
        const char2: Character= {name:"char1", life:-1, defense:40, strength:40}
        try {
            const res = performAttack(char1, char2, mock1)
        } catch (error) {
            expect(mock1).toHaveBeenCalled()
            expect(mock1).toBeCalledTimes(1)
            expect(mock1).toReturnTimes(1)
            expect(mock1).toReturnWith(false)
            expect(error.message).toBe("Invalid Character")
        }
    })
})