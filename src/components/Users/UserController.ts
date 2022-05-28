import { NextFunction, Request, Response } from "express";
import { request } from "http";
import { userBusiness } from "./UserBusiness";
import { User } from "./UserSchema";

class UserController {

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {


            const body = req.body;

            const userSaved = await userBusiness.createUser(body);

            res.json(userSaved);
        } catch (error) {
            next(error)
        }

    }

    async getUsers(req: Request, res: Response, next: NextFunction) {

        try {

            const userList = await userBusiness.getUsers();

            res.json(userList);

        } catch (error) {

            next(error)

        }

    }

    async getUser(req: Request, res: Response, next: NextFunction) {

        try {

            const id = req.user_id;

            const userList = await userBusiness.getUserById(id);

            res.json(userList);

        } catch (error) {

            next(error)

        }

    }



    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;

            const user = await userBusiness.login(body);

            res
                .cookie('token', user)
                .json(user)

        } catch (error) {
            next(error)
        }
    }

}

export const userController = new UserController()