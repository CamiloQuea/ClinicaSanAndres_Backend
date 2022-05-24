import { mongodb } from "../../services/db";
import { DepartmentExample } from "./DepartmentExample";
import { Department } from "./DepartmentsModel";


class DepartmentDao {

    private async departmentCollection() {
        const users = mongodb.cachedDb.collection('departments');
        return users;
    }

    async createDepartment(name:string) {


        const departments = await this.departmentCollection();

        const departmentSaved = await departments.insertOne({name},{raw:true});

        console.log(departmentSaved)

        return departmentSaved;

    }

    async getDepartments() {

        const departments = await this.departmentCollection();

        const departmentList = await departments.find().toArray();

        return departmentList

    }

}

export const departmentDao = new DepartmentDao();