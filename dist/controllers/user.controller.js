"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.addUser = void 0;
const user_service_1 = require("../services/user.service");
const jwt_config_1 = require("../config/jwt.config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, name, email, password } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        yield (0, user_service_1.addUserService)({ username, name, email, password: hashedPassword });
        res.json({
            msg: 'User added successfully',
            body: req.body,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.addUser = addUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield (0, user_service_1.findUserByUsernameService)(username);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: 'Wrong password' });
        }
        const token = (0, jwt_config_1.generateToken)(user);
        res.json({ msg: 'Logged in successfully', token });
    }
    catch (error) {
        next(error);
    }
});
exports.loginUser = loginUser;
