import {performPurchase, User} from "../src/index";

describe("should test index.ts", ()=>{
    test("should test performPurchase and return a user with new balance", ()=>{
        let user: User= {name:"João",balance: 500}
        let value: number= 300
        let result: User | undefined = performPurchase(user, value)
        expect(result?.balance).toBe(200)
        expect(result?.name).toBe("João")
    })
    test("should test performPurchase and return a user with new balance = 0", ()=>{
        let user: User= {name:"João",balance: 300}
        let value: number= 300
        let result: User | undefined = performPurchase(user, value)
        expect(result?.balance).toBe(0)
        expect(result?.name).toBe("João")
    })
    test("should test performPurchase and return undefined because balance < totalPurchase", ()=>{
        let user: User= {name:"João",balance: 500}
        let value: number= 800
        let result: User | undefined = performPurchase(user, value)
        expect(result).toBeUndefined()
    })
})