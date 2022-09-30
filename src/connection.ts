import mysql from 'promise-mysql';
import { database } from './sources/key-mysql';

const pool = mysql.createPool(database);

pool.getConnection().
    then(connection=> {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;