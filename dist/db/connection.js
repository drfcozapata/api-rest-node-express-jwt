"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1301',
    database: 'restaurant',
});
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    }
    else {
        console.log('Connected to the database');
    }
});
exports.default = connection;
