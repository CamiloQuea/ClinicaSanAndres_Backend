import { departmentDao } from "./DepartmentDao";

class DepartmentBusiness {


    async createDepartment (body: any) {

        const departmentSaved= await departmentDao.createDepartment(body.name);

        return departmentSaved;

    }

    async getDepartments () {

        const departmentList = await departmentDao.getDepartments();

        return departmentList;

    }

}


export const departmentBusiness = new DepartmentBusiness();