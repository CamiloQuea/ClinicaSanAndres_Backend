import { comparePassword, encryptPassword } from "../../util/bcrypt";
import { signJSONData, verifyToken } from "../../util/jwt";
import { userDao } from "./UserDao";
import { User } from "./UserSchema";

class UserBusiness {

    async createUser(body: any) {

        const user = body;

        user.password = await encryptPassword(user.password);

        const userSaved = await userDao.createUser(user);

        return userSaved;

    }

    async getUsers() {

        const userList = await userDao.getUsers();

        return userList;

    }

    async getUserById(id: string) {

        const userInfo = await userDao.getUserById(id);

        return userInfo;

    }



    async login(loginData: { email: string, password: string }) {

        const user = await userDao.getUserByEmail(loginData.email);

        if (!user) return 'NO HAY USUARIO O DATOS INCORRECTOS'



        if (!await comparePassword(loginData.password, user.password)) return 'NO HAY USUARIO O DATOS INCORRECTOS'

        const jwt = signJSONData({ id: user._id.toString() });

        return jwt;

    }

}

export const userBusiness = new UserBusiness();
