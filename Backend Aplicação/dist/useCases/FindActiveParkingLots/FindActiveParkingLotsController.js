"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindActiveParkingLotsController = void 0;
const ParkModel_1 = require("../../repositories/models/ParkModel");
const CalculateTimeUseCase_1 = __importDefault(require("../auxiliarFunctions/CalculateTimeUseCase/CalculateTimeUseCase"));
const CalculateFeeUseCase_1 = __importDefault(require("../auxiliarFunctions/CalculateFeeUseCase/CalculateFeeUseCase"));
class FindActiveParkingLotsController {
    /**
     * Metodo para resgatar todos os registros salvos no banco de dados
     */
    static async findAll(request, response) {
        //Busca na base de dados todos os registros salvos, filtrando por seu status "ativo"
        const parks = await ParkModel_1.parkModel.find({ status: "Active" }).populate("client");
        // Se a busca não retornar nenhum registro, ele retorna uma mensagem de "Not found" e um status code 404
        if (!parks || parks.length === 0) {
            return response.status(404).json({ message: "Not Foundaaaaaaaa" });
        }
        //Se a busca retornar registros, ele retorna os mesmos em forma de lista
        return response.status(200).json({
            registers: parks,
        });
    }
    /**
     * Metodo para retornar um unico registro, baseado em seu id, mandado na requisição
     */
    static async findById(request, response) {
        //Recupera o id da requisição e faz uma busca no banco para o registro
        const { id } = request.params;
        const park = await ParkModel_1.parkModel.findById(id).populate("client");
        //Se não achar, retorna uma mensagem de "not found"
        if (!park) {
            return response.status(422).json({ message: "Parking not found" });
        }
        // Se achar, realiza o calculo de tempo entre o registro de entrada e a data atual
        const timeExpent = CalculateTimeUseCase_1.default.calculate(park?.startsAt, new Date());
        return response.status(200).json({
            parking: park,
            totalTime: `O tempo total é de ${timeExpent} horas`,
            fee: `A taxa sugerida fica em R$${CalculateFeeUseCase_1.default.calculateFee(timeExpent)},00`,
        });
    }
}
exports.FindActiveParkingLotsController = FindActiveParkingLotsController;
