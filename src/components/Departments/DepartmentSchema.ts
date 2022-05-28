import { ObjectId } from "mongodb";
import { Collection } from "../helpers/Collection";
import { departmentDao } from "./DepartmentDao";
import { DepartmentExample } from "./DepartmentExample";

const collectionName = 'departments';

export interface Service {

    name: string,
    

}

export interface Department {

    name: string,
    service: Service[]

}

const indexes = [{ field: 'name', mode: 'unique' }, { field: 'service.name', mode: 'sparse' }]

export const departmentComponent = new Collection<Department>(collectionName, indexes, async (departmentCollection) => {

    await departmentCollection.insertMany(DepartmentExample)

});