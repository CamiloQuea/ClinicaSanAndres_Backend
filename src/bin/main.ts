import app from "../app";
import apiConfig from "../configs/api";
import routes from "../routes";
import { initDB } from "../services/db";
import log from "../services/log";


app.use(routes);

app.listen(apiConfig.port, async () => {

    log.info('Servidor iniciando...')
    await initDB();

    log.info(`Server abierto en http://localhost:${apiConfig.port}`);


})