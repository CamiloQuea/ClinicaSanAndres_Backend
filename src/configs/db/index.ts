import { config } from 'dotenv';
config();


const dbconfig = {

    uri: process.env.URI || 'mongodb://localhost:27017/Clinica'

}

export default dbconfig;



