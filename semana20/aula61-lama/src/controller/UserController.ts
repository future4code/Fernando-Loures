import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import  IdGenerator  from "../services/IdGenerator";
import  Authenticator  from "../services/Authenticator";
import  HashManager  from "../services/HashManager";
import  UserDatabase  from "../data/UserDatabase";

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }
            const userBusiness = new UserBusiness(
                IdGenerator,
                Authenticator,
                HashManager,
                UserDatabase);
            const token = await userBusiness.signup(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {
        try {

            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };
            const userBusiness = new UserBusiness(
                IdGenerator,
                Authenticator,
                HashManager,
                UserDatabase);
            const token = await userBusiness.login(loginData);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}