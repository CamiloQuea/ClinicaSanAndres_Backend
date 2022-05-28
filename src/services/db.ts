import log from '../services/log';
import { Db, MongoClient } from 'mongodb'
import dbconfig from '../configs/db'

class MongoDB {

    cachedDb: Db;
    client: MongoClient;

    MONGODB_URI = dbconfig.uri;
    DB_NAME = dbconfig.dbName;

    async connectToDatabase() {

        if (this.cachedDb) {

            return this.cachedDb;
        }
        try {
            // Connect to our MongoDB database hosted on MongoDB Atlas

            this.client = await MongoClient.connect(this.MONGODB_URI);

            const db = this.client.db(this.DB_NAME);

            this.cachedDb = db;

            log.info('DB conectada');

            this.setListener();

            return db;
        } catch (error) {
            console.log("ERROR aquiring DB Connection!");
            throw error;
        }


    };

    private setListener() {



    }

}

export const mongodb = new MongoDB();
