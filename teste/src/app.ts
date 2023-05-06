import express from "express";
import database from "./config/database";
import { routes } from "./routes";
import cors from "cors";
const app = express();

/**
 * Middlewares
 */
app.use(express.json());
app.use(cors());
app.use(routes);

/**
 * Conexão com o banco de dados
 */
database.startMongoDb();

/**
 * Inicialização do servidor
 */

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
