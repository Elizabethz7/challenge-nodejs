export const database = {
        connectionLimit : 4,
        host: process.env.DATABASE_HOST,
        user:  process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    };
