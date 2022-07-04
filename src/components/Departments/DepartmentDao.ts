import { Department, DepartmentModel } from "./DepartmentSchema";


class DepartmentDao {

    async createDepartment(department: Department) {


        const departmentModel = new DepartmentModel(department)

        const departmentSaved = await departmentModel.save()


        return departmentSaved;

    }

    async getDepartments() {

        const departmentList = await DepartmentModel.find();

        return departmentList

    }

}

export const departmentDao = new DepartmentDao();