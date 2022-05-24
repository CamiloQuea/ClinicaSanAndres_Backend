import { NextFunction, Request, Response } from "express";
import { departmentBusiness } from "./DepartmentBusiness";
import { departmentDao } from "./DepartmentDao";

class DepartmentController {


    async createDepartment (req: Request, res: Response, next: NextFunction) {

        const body = req.body;

        const departmentSaved = await departmentBusiness.createDepartment(body);

        res.json(departmentSaved);

    }

    async getDepartments (req: Request, res: Response, next: NextFunction)  {

        const departmentList = await departmentBusiness.getDepartments();

        res.json(departmentList);

    }
}

export const departmentController = new DepartmentController();