import { Request, Response, Router } from "express";
import { userController } from "../components/Users/UserController";
import { verifyUser } from "../middleware/verifyUser";

export const userRoutes = Router();

userRoutes.get('/users', verifyUser, userController.getUsers);
userRoutes.get('/user', verifyUser, userController.getUser);
userRoutes.post('/user', verifyUser, userController.createUser);
userRoutes.post('/login',  userController.login);
