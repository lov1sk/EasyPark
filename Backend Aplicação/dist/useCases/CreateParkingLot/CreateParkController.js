"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateParkController = void 0;
const ClientModel_1 = require("../../repositories/models/ClientModel");
const ParkModel_1 = require("../../repositories/models/ParkModel");
const DateFormatterUseCase_1 = __importDefault(require("../auxiliarFunctions/DateFormatter/DateFormatterUseCase"));
class CreateParkController {
    /**
     * Função principal handle, para lidar com o cadastro de um novo registro de estacionamento,
     * onde este sera salvo no banco de dados e enviado uma resposta a requisição com o objeto criado e uma mensagem de OK
     */
    static async handle(request, response) {
        // Recuperando o cliente passado para novo cadastro
        const { client } = request.body;
        try {
            // Ao enviar o forms, primeiro ele cria um cliente
            const clientCreated = await ClientModel_1.ClientModel.create(client);
            // Um registro criado a partir do cliente cadastrado, recuperando seu Id
            const newParkingLot = {
                client: clientCreated._id,
                startsAt: new Date(),
                startTime: DateFormatterUseCase_1.default.format(new Date()),
            };
            // Salvando o registro criado no banco de dados
            const parkingLotCreated = await ParkModel_1.parkModel.create(newParkingLot);
            return response.status(201).json({
                object: parkingLotCreated,
                message: "ParkingLot created sucessfully",
            });
        }
        catch (error) {
            return response.status(500).json({ message: error });
        }
    }
}
exports.CreateParkController = CreateParkController;
