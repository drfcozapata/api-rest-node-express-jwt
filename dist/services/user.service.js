"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByUsernameService = exports.addUserService = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const addUserService = (user) => {
    return new Promise((resolve, reject) => {
        connection_1.default.query('INSERT INTO users SET ?', user, err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};
exports.addUserService = addUserService;
const findUserByUsernameService = (username) => {
    return new Promise((resolve, reject) => {
        connection_1.default.query('SELECT * FROM users WHERE username = ?', [username], (err, data) => {
            if (err) {
                return reject(err);
            }
            if (data.length === 0) {
                return resolve(null);
            }
            resolve(data[0]);
        });
    });
};
exports.findUserByUsernameService = findUserByUsernameService;
