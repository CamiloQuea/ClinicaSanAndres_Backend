import { ObjectId } from "mongodb";
import { departmentDao } from "../Departments/DepartmentDao";
import { Collection } from "../Collection";
import { userBusiness } from "./UserBusiness";
import { UserExample } from "./UserExample";

const collectionName = 'users';

export interface User {
    _id?: ObjectId |string,
    cmp: string,
    name: string,
    fatherSurname: string,
    motherSurname: string,
    email: string,
    phone: string,
    department: {
        _id: ObjectId | string,
        name: string
    },
    password: string,
    rols: string[]
}

const indexes = [
    { field: 'email', mode: "unique" }
]

export const userComponent = new Collection<User>(collectionName, indexes, async () => {

    const department = await departmentDao.getDepartments();

    UserExample.forEach(async (user) => {
        const { _id, name } = department[Math.floor(Math.random() * department.length)];
        user.department = { _id: _id.toString(), name };
        const a = await userBusiness.createUser(user);
    });

});