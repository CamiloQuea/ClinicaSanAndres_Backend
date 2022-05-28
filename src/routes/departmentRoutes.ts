import { Router } from "express";
import { departmentController } from "../components/Departments/DepartmentController";
import { verifyUser } from "../middleware/verifyUser";

export const departmentRoutes = Router();

departmentRoutes.get('/department', verifyUser, departmentController.getDepartments);
departmentRoutes.post('/department', verifyUser, departmentController.createDepartment);

