import { UserInputDTO, LoginInputDTO } from "../model/User";
import  {UserDatabase}  from "../data/UserDatabase";
import  {HashManager}  from "../services/HashManager";
import  {Authenticator}  from "../services/Authenticator";
import { BaseError } from "../error/BaseError";
import { IdGenerator } from "../services/IdGenerator";
export class UserBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
        private hashManager: HashManager,
        private userDatabase: UserDatabase
    ) { }

    async createUser(user: UserInputDTO) {
        // const idGenerator = new IdGenerator();
        const id = this.idGenerator.generate();

        // const hashManager = new HashManager();
        const hashPassword = await this.hashManager.hash(user.password);

        // const userDatabase = new UserDatabase();
        await this.userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);

        // const authenticator = new Authenticator();
        const accessToken = this.authenticator.generateToken({ id, role: user.role });

        return accessToken;
    }

    async getUserByEmail(user: LoginInputDTO) {

        // const userDatabase = new UserDatabase();
        const userFromDB = await this.userDatabase.getUserByEmail(user.email);

        // const hashManager = new HashManager();
        const hashCompare = await this.hashManager.compare(user.password, userFromDB.getPassword());

        // const authenticator = new Authenticator();
        const accessToken = this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }

    async signup(user: UserInputDTO) {
        if (!user.name || !user.email || !user.password || !user.role)
            throw new BaseError("Please, insert valid values", 422);
        if (!user.email.includes(".com") || !user.email.includes("@") || user.email.split("@")[0].length < 1)
            throw new BaseError("Please, insert valid email", 422);
        const token = await this.createUser(user)
        return token
    }
    async login(user: LoginInputDTO) {
        if (!user.email || !user.password|| user.password.length < 6)
            throw new BaseError("Please, insert valid values", 422);
        if (!user.email.includes(".com") || !user.email.includes("@") || user.email.split("@")[0].length < 1)
            throw new BaseError("Please, insert valid email", 422);
        const userFromDB = await this.userDatabase.getUserByEmail(user.email)
        if(!userFromDB)
            throw new BaseError("invalid credentials", 400);
        const hashValidator = await this.hashManager.compare(user.password, userFromDB.getPassword())
        if(!hashValidator)
            throw new BaseError("invalid credentials", 400);
        const accessToken = await this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });
        return accessToken
    }
}