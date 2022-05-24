import { config } from 'dotenv';
config();


const dbconfig = {

    uri: process.env.URI || 'mongodb://localhost:27017',
    dbName: 'Test'

}

export default dbconfig;



