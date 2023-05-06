"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
/**
 * Middlewares
 */
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.routes);
/**
 * Conexão com o banco de dados
 */
database_1.default.startMongoDb();
/**
 * Inicialização do servidor
 */
app.listen(3000, () => {
    console.log("Server running at port 3000");
});
