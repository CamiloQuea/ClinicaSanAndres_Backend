import app from "../app";
import apiConfig from "../configs/api";
import { doctoresModel } from "../components/Doctors/DoctorsModel";
import routes from "../routes";
import { initDb } from "../services/db";
import log from "../services/log";
import { departmentModel } from "../components/Departments/DepartmentsModel";


app.use(routes);

app.listen(apiConfig.port, async () => {

    log.info(`Server abierto en http://localhost:${apiConfig.port}`);
    await initDb();

})