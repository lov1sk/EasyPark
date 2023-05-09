"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindParkingLotsController = void 0;
const ParkModel_1 = require("../../repositories/models/ParkModel");
const CalculateFeeUseCase_1 = __importDefault(require("../auxiliarFunctions/CalculateFeeUseCase/CalculateFeeUseCase"));
const CalculateTimeUseCase_1 = __importDefault(require("../auxiliarFunctions/CalculateTimeUseCase/CalculateTimeUseCase"));
class FindParkingLotsController {
    static async findAll(request, response) {
        const parks = await ParkModel_1.parkModel.find({}).populate("client");
        if (!parks || parks.length === 0) {
            return response.status(404).json({ message: "Not Found" });
        }
        return response.status(200).json({ parks });
    }
    static async findById(request, response) {
        const { id } = request.params;
        const parkingLot = await ParkModel_1.parkModel.findById(id).populate("client");
        if (!parkingLot) {
            return response.status(404).json({ message: "not found" });
        }
        try {
            const timeExpent = CalculateTimeUseCase_1.default.calculate(parkingLot?.startsAt, new Date());
            // retornar o start time, end time, total time e o fee
            return response.status(200).json({
                object: parkingLot,
                totalTime: `O tempo total é de ${timeExpent} horas`,
                fee: `A taxa sugerida fica em R$${CalculateFeeUseCase_1.default.calculateFee(timeExpent)},00`,
            });
        }
        catch (error) {
            console.log(error);
            return response.status(500).json({ error });
        }
    }
}
exports.FindParkingLotsController = FindParkingLotsController;
