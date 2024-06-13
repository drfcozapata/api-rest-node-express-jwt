"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token !== undefined && token.startsWith('Bearer ')) {
        const bearerToken = token.slice(7);
        try {
            const secretKey = process.env.SECRET_KEY;
            if (!secretKey) {
                throw new Error('SECRET_KEY is not defined');
            }
            const validToken = jsonwebtoken_1.default.verify(bearerToken, secretKey);
            next();
        }
        catch (error) {
            return res.status(401).json({
                error: 'Unauthorized',
            });
        }
    }
};
exports.default = validateToken;
