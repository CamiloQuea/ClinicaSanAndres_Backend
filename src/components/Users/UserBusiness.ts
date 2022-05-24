import { userDao } from "./UserDao";
import { User } from "./UserModel";

class UserBusiness {

    async createUser(body: any) {

        const user = new User(body);

        const userSaved = await userDao.createUser(user);

        return userSaved;

    }

    async getUsers() {

        const userList = await userDao.getUsers();

        return userList;

    }

}

export const userBusiness = new UserBusiness();
