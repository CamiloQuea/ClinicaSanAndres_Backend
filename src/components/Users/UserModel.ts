import { userInfo } from "os"

export class User {
    constructor(
        public user: {
            cmp: string,
            name: string,
            fatherSurname: string,
            motherSurname: string,
            email: string,
            phone: string,
            department: {
                _id: string
                name: string
            },
            password: string,
            rol: string[]
        }


        // cmp: string,
        // name: string,
        // fatherSurname: string,
        // motherSurname: string,
        // email: string,
        // phone: string,
        // department: {
        //     _id: string
        //     name: string
        // },
        // password: string,
        // rol: string[]

    ) { }

    getObject() {
        return this.user;
    }

}



