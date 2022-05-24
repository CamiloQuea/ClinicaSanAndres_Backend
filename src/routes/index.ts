import { Router } from "express";
import { departmentRoutes } from "./departmentRoutes";
import { userRoutes } from "./userRoutes";


const routes = Router();

//ROUTAS DE DEPARTAMENTO
routes.use(departmentRoutes);
routes.use(userRoutes);



export default routes;