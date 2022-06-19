import { ObjectId } from "mongodb";
import { departmentComponent } from "../Departments/DepartmentSchema";
import { userComponent, User } from "./UserSchema";

class UserDao {

    async createUser(user: User) {


        const usersCollection = await userComponent.getCollection();

        const departmentsCollection = await departmentComponent.getCollection();


        // console.log(departmentsCollection)

        // const countDocs = await departmentsCollection.countDocuments({
        //     $and: [
        //         {
        //             _id: user.department._id
        //         },
        //         {
        //             name: user.department.name
        //         }
        //     ]
        // });



        // if (countDocs == 0) {
        //     return
        // }



        const userSaved = await usersCollection.insertOne(user);



        return userSaved;

    }

    async getUsers() {

        const users = await userComponent.getCollection();

        const userList = await users.find().toArray()

        return userList;

    }

    async getUserById(_id: string) {

        const users = await userComponent.getCollection();

        const userFound = await users.findOne({ _id: new ObjectId(_id) });

        return userFound;

    }

    async getUserByEmail(email: string) {

        const users = await userComponent.getCollection();

        const userFound = await users.findOne({ email });

        return userFound;

    }

}

export const userDao = new UserDao();