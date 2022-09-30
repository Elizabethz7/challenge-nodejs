"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_mysql_1 = __importDefault(require("promise-mysql"));
var key_mysql_1 = require("./sources/key-mysql");
var pool = promise_mysql_1.default.createPool(key_mysql_1.database);
pool.getConnection().
    then(function (connection) {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});
exports.default = pool;
