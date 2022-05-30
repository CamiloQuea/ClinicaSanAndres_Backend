import { NextFunction, Request, Response } from "express";
import { departmentBusiness } from "./DepartmentBusiness";
import { departmentDao } from "./DepartmentDao";
import { departmentValidation } from "./utils/DepartmentValidation";

class DepartmentController {


    async createDepartment(req: Request, res: Response, next: NextFunction) {

        const body = req.body;

        try {

            const departmentSaved = await departmentBusiness.createDepartment(body);

            res.json(departmentSaved);
            
        } catch (e: any) {

            next(e);

        }


    }

    async getDepartments(req: Request, res: Response, next: NextFunction) {

        try {

            const departmentList = await departmentBusiness.getDepartments();

            res.json(departmentList);

        } catch (error) {
            next(error)
        }
    }
}

export const departmentController = new DepartmentController();