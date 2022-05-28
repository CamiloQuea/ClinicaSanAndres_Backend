import { ObjectId } from "mongodb";

export const UserExample = [
    {
        cmp: '123',
        name: 'Camilo',
        fatherSurname: 'Quea',
        motherSurname: 'Montesinos',
        email: 'camilo@gmail.com',
        phone: '12345678',
        department: {
            _id: new ObjectId,
            name: 'oftalmologia'
        },
        password: '123',
        rol: ['doctor']
    },
]
