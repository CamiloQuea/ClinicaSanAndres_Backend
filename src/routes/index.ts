import { NextFunction, Request, Response, Router } from "express";
import { ErrorHandler404 } from "../middleware/errorHandlers/Error404";
import { errorHandler } from "../middleware/errorHandlers/ErrorHandler";
import { departmentRoutes } from "./departmentRoutes";
import { patientRoutes } from "./patientRoutes";
import { userRoutes } from "./userRoutes";


const routes = Router();

//ROUTAS DE DEPARTAMENTO
routes.use(departmentRoutes);
routes.use(userRoutes);
routes.use(patientRoutes);

routes.use(errorHandler)

routes.use(ErrorHandler404)

export default routes;