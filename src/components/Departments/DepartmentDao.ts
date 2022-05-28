import { mongodb } from "../../services/db";
import { DepartmentExample } from "./DepartmentExample";
import { Department, departmentComponent } from "./DepartmentSchema";


class DepartmentDao {

    async createDepartment(department: Department) {


        const departments = await departmentComponent.getCollection();

        const departmentSaved = await departments.insertOne(department);


        return departmentSaved;

    }

    async getDepartments() {

        const departments = await departmentComponent.getCollection();

        const departmentList = await departments.find().toArray();

        return departmentList

    }

}

export const departmentDao = new DepartmentDao();