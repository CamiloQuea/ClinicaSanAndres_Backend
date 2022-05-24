import { NextFunction, Request, Response } from "express";
import { request } from "http";
import { userBusiness } from "./UserBusiness";
import { User } from "./UserModel";

class UserController {

    async createUser (req: Request, res: Response, next: NextFunction) {

        const body = req.body;

        const userSaved = await userBusiness.createUser(body);

        res.json(userSaved);

    }

    async getUsers (req: Request, res: Response, next: NextFunction)  {

        const userList = await userBusiness.getUsers();


        res.json(userList);

    }

}

export const userController= new UserController()