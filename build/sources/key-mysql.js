"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
exports.database = {
    host: process.env.DB_HOST,
    user: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};
