"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientController = void 0;
const ClientModel_1 = require("../../repositories/models/ClientModel");
class CreateClientController {
    static async handle(request, response) {
        const client = request.body;
        try {
            await ClientModel_1.ClientModel.create(client);
            return response.status(201).json({ message: "Client created" });
        }
        catch (error) {
            return response.status(500).json({ message: error });
        }
    }
}
exports.CreateClientController = CreateClientController;
