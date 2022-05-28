import { ObjectId } from "mongodb";
import { departmentDao } from "../Departments/DepartmentDao";
import { Collection } from "../helpers/Collection";
import { userBusiness } from "./UserBusiness";
import { UserExample } from "./UserExample";

const collectionName = 'users';

export interface User {
    _id?: ObjectId
    cmp: string,
    name: string,
    fatherSurname: string,
    motherSurname: string,
    email: string,
    phone: string,
    department: {
        _id: ObjectId,
        name: string
    },
    password: string,
    rol: string[]
}

const indexes = [
    { field: 'email', mode: "sparse" }
]

export const userComponent = new Collection<User>(collectionName, indexes, async () => {

    const department = await departmentDao.getDepartments();
   
    UserExample.forEach(async (user) => {
        const { _id, name } = department[Math.floor(Math.random() * department.length)];
        user.department = { _id: _id, name };
        await userBusiness.createUser(user);
    });

});