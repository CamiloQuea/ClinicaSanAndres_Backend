import { ObjectId } from "mongodb";
import { User } from "./UserSchema";

export const UserExample:User[] = [
    {
        cmp: '123',
        name: 'Camilo',
        fatherSurname: 'Quea',
        motherSurname: 'Montesinos',
        email: 'camilo@gmail.com',
        phone: '12345678',
        department: {
            _id: new ObjectId().toString(),
            name: 'oftalmologia'
        },
        password: '123',
        rols: ['dev']
    },
]
