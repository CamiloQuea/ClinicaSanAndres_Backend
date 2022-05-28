import app from "../app";
import { initCollections } from "../components/initializeCollections";
import apiConfig from "../configs/api";
import routes from "../routes";
import { mongodb } from "../services/db";
import log from "../services/log";


app.use(routes);

app.listen(apiConfig.port, async () => {

    log.info('Servidor iniciando...')
    await mongodb.connectToDatabase();
    await initCollections();
    log.info(`Server abierto en http://localhost:${apiConfig.port}`);

    
})