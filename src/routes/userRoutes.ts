import { Request, Response, Router } from "express";
import { userController } from "../components/Users/UserController";

export const userRoutes = Router();

userRoutes.get('/user', userController.getUsers);
userRoutes.post('/user', userController.createUser);

