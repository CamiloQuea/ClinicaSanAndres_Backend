import app from "../app";
import { departmentDao } from "../components/Departments/DepartmentDao";
import { userDao } from "../components/Users/UserDao";
import apiConfig from "../configs/api";
import routes from "../routes";
import { mongodb } from "../services/db";
import log from "../services/log";


app.use(routes);

app.listen(apiConfig.port, async () => {

    log.info(`Server abierto en http://localhost:${apiConfig.port}`);
    await mongodb.connectToDatabase();
  

})