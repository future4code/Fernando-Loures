import { UserBusiness } from "../../src/business/UserBusiness";
import { LoginInputDTO, User, UserInputDTO, UserRole } from "../../src/model/User";
import AuthenticatorMock from "../AuthenticatotMock";
import HashManagerMock from "../HashManagerMock";
import  IdGeneratorMock from "../IdGeneratorMock";
import userDataBaseMock from "../userDataBaseMock";

const userMock : UserInputDTO = {
    name:"name", 
    email: "newemail@email.com", 
    password:"password", 
    role:"Normal"
}
const userLoginMock : LoginInputDTO = {
    email: "email@email.com", 
    password:"password", 
}
const userLoginErrorMock : LoginInputDTO = {
    email: "email@email.com", 
    password:"passwordFalse", 
}
const userBusiness = new UserBusiness(
    IdGeneratorMock,
    AuthenticatorMock,
    HashManagerMock,
    userDataBaseMock
    )

describe("USERBUSINESS", ()=>{

    describe("getUserByEmail",()=>{
        it("should get an user by email", async()=>{
            expect.assertions(1)
            const res = await userBusiness.getUserByEmail(userLoginMock)
            expect(res).toBe("token")
        })
        it("should return an error when password is not accept", async()=>{
            expect.assertions(1)
            try{
                const res = await userBusiness.getUserByEmail(userLoginErrorMock)
            }catch(error){
                expect(error.message).toBe("Invalid Password!")
            }
        })
    })
    describe("Sginup",()=>{
        it("should try to signup and return an error because name is empty ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.signup({
                    name:"", 
                    email: "newemail@email.com", 
                    password:"password", 
                    role:"Normal"
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid values")
                expect(error.code).toBe(422)
            }
        })
        it("should try to signup and return an error because email is empty ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.signup({
                    name:"name", 
                    email: "", 
                    password:"password", 
                    role:"Normal"
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid values")
                expect(error.code).toBe(422)
            }
        })
        it("should try to signup and return an error because password is empty ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.signup({
                    name:"name", 
                    email: "newemail@email.com", 
                    password:"", 
                    role:"Normal"
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid values")
                expect(error.code).toBe(422)
            }
        })
        it("should try to signup and return an error because role is empty ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.signup({
                    name:"name", 
                    email: "newemail@email.com", 
                    password:"password", 
                    role:""
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid values")
                expect(error.code).toBe(422)
            }
        })
        it("should try to signup and return an error because email is not valid - .com ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.signup({
                    name:"name", 
                    email: "newemail@email", 
                    password:"password", 
                    role:"Normal"
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid email")
                expect(error.code).toBe(422)
            }
        })
        it("should try to signup and return an error because email is not valid - @ ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.signup({
                    name:"name", 
                    email: "emailemail.com", 
                    password:"password", 
                    role:"Normal"
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid email")
                expect(error.code).toBe(422)
            }
        })
        it("should try to signup and return an error because email is not valid - .com ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.signup({
                    name:"name", 
                    email: "@email.com", 
                    password:"password", 
                    role:"Normal"
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid email")
                expect(error.code).toBe(422)
            }
        })
        // it("should try to signup and return an error because email already exist ", async ()=>{
        //     expect.assertions(2)
        //     try{
        //         const res = await userBusiness.signup({
        //             name:"name", 
        //             email: "email@email.com", 
        //             password:"password", 
        //             role:"Normal"
        //         })
        //     }catch(error){
        //         expect(error.message).toBe("Email already exist")
        //         expect(error.code).toBe(400)
        //     }
        // })
        it("should create an new user", async ()=>{
            expect.assertions(1)
            const res = await userBusiness.createUser(userMock)
            expect(res).toBe("token")
        })
    })
    describe("login", ()=>{
        it("should try to login and return an error because email is empty ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.login({
                    email: "", 
                    password:"password"
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid values")
                expect(error.code).toBe(422)
            }
        })
        it("should try to login and return an error because password is empty ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.login({
                    email: "email@email.com", 
                    password:"", 
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid values")
                expect(error.code).toBe(422)
            }
        })
        it("should try to login and return an error because password length is < 6 ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.login({
                    email: "email@email.com", 
                    password:"pass", 
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid values")
                expect(error.code).toBe(422)
            }
        })
        it("should try to login and return an error because email is not valid - .com ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.login({
                    email: "email@email", 
                    password:"password", 
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid email")
                expect(error.code).toBe(422)
            }
        })
        it("should try to logins and return an error because email is not valid - @ ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.login({
                    email: "emailemail.com", 
                    password:"password", 
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid email")
                expect(error.code).toBe(422)
            }
        })
        it("should try to login and return an error because email is not valid - .com ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.login({
                    email: "@email.com", 
                    password:"password", 
                })
            }catch(error){
                expect(error.message).toBe("Please, insert valid email")
                expect(error.code).toBe(422)
            }
        })
        it("should try to login and return an error because password is not valid ", async ()=>{
            expect.assertions(2)
            try{
                const res = await userBusiness.login({
                    email: "email@email.com", 
                    password:"wrongPassword", 
                })
            }catch(error){
                expect(error.message).toBe("invalid credentials")
                expect(error.code).toBe(400)
            }
        })
        it("should login and return a token", async ()=>{
            expect.assertions(1)
            const res = await userBusiness.login({
                email: "email@email.com", 
                password:"password", 
            })
            expect(res).toBe("token")
        })
    })
})