import { ObjectId } from "mongodb";
import { Collection } from "../Collection";
import { departmentDao } from "./DepartmentDao";
import { DepartmentExample } from "./DepartmentExample";

const collectionName = 'departments';

export interface Service {
    _id: ObjectId,
    name: string,


}

export interface Department {
    _id: ObjectId,
    name: string,
    services: Service[]

}

const indexes = [{ field: 'name', mode: 'unique' }, { field: 'service.name', mode: 'sparse' }]

export const departmentComponent = new Collection<Department>(collectionName, indexes, async (departmentCollection) => {

    await departmentCollection.insertMany(DepartmentExample)

});