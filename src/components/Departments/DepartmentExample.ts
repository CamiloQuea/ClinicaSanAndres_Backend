import { ObjectId } from "mongodb";
import { Department } from "./DepartmentSchema";

export const DepartmentExample: Department[] = [
    {
        _id: new ObjectId(),
        name: 'oftalmologia',
        services: [
            { _id: new ObjectId(), name: 'consulta' }
        ]
    },
    {
        _id: new ObjectId(),
        name: 'laboratorio',
        services: [
            { _id: new ObjectId(), name: 'consulta' }
        ]
    },
    {
        _id: new ObjectId(),
        name: 'rayos X',
        services: [
            {    _id: new ObjectId(),name: 'consulta' }
        ]
    },
    {
        _id: new ObjectId(),
        name: 'pediatria',
        services: [
            {    _id: new ObjectId(),name: 'consulta' }
        ]
    }
]