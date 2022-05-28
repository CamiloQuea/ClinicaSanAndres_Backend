import { Department } from "./DepartmentSchema";

export const DepartmentExample: Department[] = [
    {
        name: 'oftalmologia',
        service: [
            { name: 'consulta' }
        ]
    },
    {
        name: 'laboratorio',
        service: [
            { name: 'consulta' }
        ]
    },
    {
        name: 'rayos X',
        service: [
            { name: 'consulta' }
        ]
    },
    {
        name: 'pediatria',
        service: [
            { name: 'consulta' }
        ]
    }
]