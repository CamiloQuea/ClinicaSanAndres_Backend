import { ObjectId } from "mongodb";
import { User, UserModel } from "./UserSchema";

class UserDao {

    async createUser(user: User) {


        const userModel = new UserModel(user)


        const userSaved = await userModel.save();

        return userSaved;

    }

    async getUsers() {

        const userList = await UserModel.find();

        return userList;

    }

    async getUserById(_id: string) {

    
        const userFound = await UserModel.findOne({ _id: new ObjectId(_id) });

        return userFound;

    }

    async getUserByEmail(email: string) {


        const userFound = await UserModel.findOne({ email });

        return userFound;

    }

}

export const userDao = new UserDao();