"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findClientsUseCase = void 0;
const ClientModel_1 = require("../../repositories/models/ClientModel");
class findClientsUseCase {
    static async findAll(request, response) {
        const clients = await ClientModel_1.ClientModel.find({});
        console.log({ clients });
        console.log(clients.length);
        if (!clients) {
            return response
                .status(404)
                .json({ message: "There is no client saved on database" });
        }
        return response.status(200).json({ clients });
    }
    static async findById(request, response) {
        const { id } = request.params;
        const client = await ClientModel_1.ClientModel.findById(id);
        console.log({ client });
        if (!client) {
            return response
                .status(404)
                .json({ message: "This client is not saved on database" });
        }
        return response.status(200).json({ client });
    }
}
exports.findClientsUseCase = findClientsUseCase;
