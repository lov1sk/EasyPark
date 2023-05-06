"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishingParkingLotController = void 0;
const ParkModel_1 = require("../../repositories/models/ParkModel");
const DateFormatterUseCase_1 = __importDefault(require("../auxiliarFunctions/DateFormatter/DateFormatterUseCase"));
class FinishingParkingLotController {
    /**
     * Função principal handle, responsavel por atualizar um registro e finalizar o mesmo
     */
    static async handle(request, response) {
        // Recuperando o id do registro de estacionamento em questão
        const { id } = request.params;
        try {
            // Recupera o registro atraves do id , salva o tempo previo de saida
            const parkingLot = await ParkModel_1.parkModel.findByIdAndUpdate(id, {
                status: "Finished",
                endTime: DateFormatterUseCase_1.default.format(new Date()),
                endsAt: new Date(),
            });
            // Se o id passado não achar nenhum registro, retorna essa mensagem
            if (!id) {
                return response.status(404).json({ message: "Parking lot not found" });
            }
            // Retorna o registro atualizado e a mensagem de sucesso
            return response.status(200).json({
                object: parkingLot,
                message: "Parking lot finished sucessfully",
            });
        }
        catch (error) {
            return response.status(500).json({ message: error });
        }
    }
}
exports.FinishingParkingLotController = FinishingParkingLotController;
