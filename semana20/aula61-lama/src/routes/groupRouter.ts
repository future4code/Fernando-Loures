import express from "express";
import { GroupController } from "../controller/groupController";


export const groupRouter = express.Router();

const groupController = new GroupController()

groupRouter.post("/register", groupController.register);
groupRouter.get("/details?", groupController.detailsGroup);
groupRouter.post("/show", groupController.scheduleConcert);
groupRouter.get("/show/:week_day", groupController.getSchedules);

