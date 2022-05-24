import { Request, Response, Router } from "express";
import { departmentController } from "../components/Departments/DepartmentController";

export const departmentRoutes = Router();

departmentRoutes.get('/department', departmentController.getDepartments);
departmentRoutes.post('/department', departmentController.createDepartment);

