"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = __importDefault(require("../routes/product.routes"));
const default_routes_1 = __importDefault(require("../routes/default.routes"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
    routes() {
        this.app.use('/', default_routes_1.default);
        this.app.use('/api/v1', [product_routes_1.default, user_routes_1.default]);
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
