
import { Types } from "mongoose";
import { Department } from "./DepartmentSchema";


const defaultServices = [
    {
        _id: new Types.ObjectId(),
        name: 'consulta'
    },
    {
        _id: new Types.ObjectId(),
        name: 'emergencia'
    }
]

export const DepartmentExample: Department[] = [
    {
        _id: new Types.ObjectId(),
        name: 'oftalmologia',
        services: defaultServices
    },
    {
           _id: new Types.ObjectId(),
        name: 'laboratorio',
        services:defaultServices
    },
    {
           _id: new Types.ObjectId(),
        name: 'rayos X',
        services: defaultServices
    },
    {
           _id: new Types.ObjectId(),
        name: 'pediatria',
        services: defaultServices
    }
]