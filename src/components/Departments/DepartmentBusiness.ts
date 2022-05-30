import { departmentDao } from "./DepartmentDao";
import { departmentValidation } from "./utils/DepartmentValidation";

class DepartmentBusiness {


    async createDepartment(body: any) {

        const { error, details, value } = departmentValidation(body);

        if (error) return { error, details };

        const departmentSaved = await departmentDao.createDepartment(value!);

        return departmentSaved;

    }

    async getDepartments() {

        const departmentList = await departmentDao.getDepartments();

        return departmentList;

    }

}


export const departmentBusiness = new DepartmentBusiness();