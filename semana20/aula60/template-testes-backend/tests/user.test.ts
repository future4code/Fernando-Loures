import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import { USER_ROLES } from "../src/model/User";
import hashGeneratorMock from "./mocks/hashGeneratorMock";
import idGeneratorMock from "./mocks/idGeneratorMock";
import tokenGeneratorMock from "./mocks/tokenGeneratorMock";
import userDataBaseMock from "./mocks/userDataBaseMock";
import { adminUserMock, normalUserMock } from "./mocks/userModelMock";

const userBusiness = new UserBusiness(
    idGeneratorMock,
    tokenGeneratorMock,
    hashGeneratorMock,
    userDataBaseMock as UserDatabase
)
const userBusinessBadHash = new UserBusiness(
    idGeneratorMock,
    tokenGeneratorMock,
    hashGeneratorMock,
    userDataBaseMock as UserDatabase
)
describe("SIGNUP", () => {
    it("Should return error for a not valid name", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.signup(
                "",
                "email@email.com",
                "password",
                USER_ROLES.NORMAL
            )
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })
    it("Should return error for an empty email", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.signup(
                "name",
                "",
                "password",
                USER_ROLES.NORMAL
            )
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })
    it("Should return error for a not valid email", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.signup(
                "name",
                "email.com",
                "password",
                USER_ROLES.NORMAL
            )
        } catch (error) {
            expect(error.message).toBe("Invalid email")
            expect(error.statusCode).toBe(422)
        }
    })
    it("Should return error for an empty password", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.signup(
                "name",
                "email@email.com",
                "",
                USER_ROLES.NORMAL
            )
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })
    it("Should return error for a not valid password", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.signup(
                "name",
                "email@email.com",
                "abc12",
                USER_ROLES.NORMAL
            )
        } catch (error) {
            expect(error.message).toBe("Invalid password")
            expect(error.statusCode).toBe(422)
        }
    })
    // it("Should return error for an empty ROLE", async () => {
    //     expect.assertions(1)
    //     try {
    //         const res = await userBusiness.signup(
    //             "name",
    //             "email@email.com",
    //             "password",
    //             "Normal"
    //         )
    //     } catch (error) {
    //         expect(error.message).toBe("Missing input")
    //     }
    // })
    it("Should return error for a valid Normal role", async () => {
        expect.assertions(1)
        const res = await userBusiness.signup(
            normalUserMock.getName(),
            normalUserMock.getEmail(),
            normalUserMock.getPassword(),
            normalUserMock.getRole(),
        )
        expect(res.accessToken).toBe("Token")
    })
    it("Should return error for a valid Admin role", async () => {
        expect.assertions(1)
        const res = await userBusiness.signup(
            adminUserMock.getName(),
            adminUserMock.getEmail(),
            adminUserMock.getPassword(),
            adminUserMock.getRole(),
        )
        expect(res.accessToken).toBe("Token")
    })
    it("Should return error for a not valid password", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.signup(
                "name",
                "emailrepetido@email.com",
                "abc12345",
                USER_ROLES.NORMAL
            )
        } catch (error) {
            expect(error.message).toBe("Email already in use")
            expect(error.statusCode).toBe(409)
        }
    })
})
describe("LOGIN", () => {
    it("Should return error for an empty email", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.login(
                "",
                "password",
            )
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })
    it("Should return error for an empty password", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.login(
                "email@email.com",
                "",
            )
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })
    it("Should return error for a not valid email", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.login(
                "notvalid@email.com",
                "password",
            )
        } catch (error) {
            expect(error.message).toBe("Invalid credentials")
            expect(error.statusCode).toBe(401)
        }
    })
    it("Should return error for valid normal user", async () => {
        expect.assertions(1)
        const res = await userBusiness.login(
            "email@email.com",
            "password",
        )
        expect(res.accessToken).toBe("Token")
    })
    it("Should return error for valid normal user", async () => {
        expect.assertions(1)
        const res = await userBusiness.login(
            "email@email.com",
            "password",
        )
        expect(res.accessToken).toBe("Token")
    })
    it("Should return error for valid Admin user", async () => {
        expect.assertions(1)
        const res = await userBusiness.login(
            "admin@email.com",
            "password",
        )
        expect(res.accessToken).toBe("Token")
    })
})
describe("GET USERS", () => {
    it("Should return error an empty id", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.getUsers("")
        } catch (error) {
            expect(error.message).toBe("id not found")
            expect(error.statusCode).toBe(404)
        }
    })
    it("Should return error for a not valid id", async () => {
        expect.assertions(2)
        try {
            const res = await userBusiness.getUsers("idNotValid")
        } catch (error) {
            expect(error.message).toBe("user not found")
            expect(error.statusCode).toBe(404)
        }
    })
    it("Should return an normal user for a not valid id", async () => {
        expect.assertions(1)
        const res = await userBusiness.getUsers("abc123Normal")
        expect(res).toBe(normalUserMock)
    })
    it("Should return an admin user for a not valid id", async () => {
        expect.assertions(1)
        const res = await userBusiness.getUsers("abc123Admin")
        expect(res).toBe(adminUserMock)
    })
})