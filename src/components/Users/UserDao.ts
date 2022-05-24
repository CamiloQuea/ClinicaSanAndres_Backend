import { mongodb } from "../../services/db";
import { UserExample } from "./UserExample";
import { User } from "./UserModel";

class UserDao {

    private async userCollection() {
        const users = mongodb.cachedDb.collection('users');
        return users;
    }

    async createUser(user: User) {

        const users = await this.userCollection();
        
        const userSaved = await users.insertOne(user.user);

        return userSaved;

    }

    async getUsers() {

        const users = await this.userCollection();

        const userList = await users.find().toArray()

        return userList;

    }

}

export const userDao = new UserDao();