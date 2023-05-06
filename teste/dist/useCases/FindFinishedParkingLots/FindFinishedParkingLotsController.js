"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFinishedParkingLotsController = void 0;
const ParkModel_1 = require("../../repositories/models/ParkModel");
const CalculateTimeUseCase_1 = __importDefault(require("../auxiliarFunctions/CalculateTimeUseCase/CalculateTimeUseCase"));
const CalculateFeeUseCase_1 = __importDefault(require("../auxiliarFunctions/CalculateFeeUseCase/CalculateFeeUseCase"));
class FindFinishedParkingLotsController {
    static async handle(request, response) {
        const parks = await ParkModel_1.parkModel
            .find({ status: "Finished" })
            .populate("client");
        if (!parks || parks.length === 0) {
            return response.status(404).json({
                message: "Not Foundaaaaaaaa",
            });
        }
        return response.status(200).json({
            parking: parks,
        });
    }
    static async findById(request, response) {
        const { id } = request.params;
        const park = await ParkModel_1.parkModel.findById(id).populate("client");
        const timeExpent = CalculateTimeUseCase_1.default.calculate(park?.startsAt, park?.endsAt);
        if (!park) {
            return response.status(422).json({ message: "Parking not found" });
        }
        return response.status(200).json({
            parking: park,
            fee: `O preço pago foi R$${CalculateFeeUseCase_1.default.calculateFee(timeExpent)},00`,
            message: "hello",
        });
    }
}
exports.FindFinishedParkingLotsController = FindFinishedParkingLotsController;
