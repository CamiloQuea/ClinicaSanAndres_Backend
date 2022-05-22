
import mongoose, { connect, connection } from 'mongoose';
import dbconfig from '../configs/db'
import log from './log';


const uri: string = dbconfig.uri;


export async function initDb() {

    await connect(uri);
    
}

connection.on('error', (err) => {

    log.error(err);

});


connection.on('open', () => {

    log.info('BASE DE DATOS CONECTADA');

});

connection.on('closed', (err) => {

    log.error(err);

});

connection.on('disconnected', () => {
    log.error('CONEXION PERDIDA');
});

connection.on('reconnected', () => {
    log.info('CONEXION RECONECTADO');
});


