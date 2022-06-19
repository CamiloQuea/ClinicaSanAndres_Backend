import { ObjectId } from "mongodb";
import { Department } from "./DepartmentSchema";


const defaultServices = [
    {
        _id: new ObjectId(),
        name: 'consulta'
    },
    {
        _id: new ObjectId(),
        name: 'emergencia'
    }
]

export const DepartmentExample: Department[] = [
    {
        _id: new ObjectId(),
        name: 'oftalmologia',
        services: defaultServices
    },
    {
        _id: new ObjectId(),
        name: 'laboratorio',
        services:defaultServices
    },
    {
        _id: new ObjectId(),
        name: 'rayos X',
        services: defaultServices
    },
    {
        _id: new ObjectId(),
        name: 'pediatria',
        services: defaultServices
    }
]