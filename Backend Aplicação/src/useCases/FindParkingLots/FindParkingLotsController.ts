import { Request, Response } from "express";
import { parkModel } from "../../repositories/models/ParkModel";
import CalculateFeeUseCase from "../auxiliarFunctions/CalculateFeeUseCase/CalculateFeeUseCase";
import CalculateTimeUseCase from "../auxiliarFunctions/CalculateTimeUseCase/CalculateTimeUseCase";

class FindParkingLotsController {
  static async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    const parks = await parkModel.find({}).populate("client");

    if (!parks || parks.length === 0) {
      return response.status(404).json({ message: "Not Found" });
    }

    return response.status(200).json({ parks });
  }
  static async findById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    const parkingLot = await parkModel.findById(id).populate("client");
    if (!parkingLot) {
      return response.status(404).json({ message: "not found" });
    }

    try {
      const timeExpent = CalculateTimeUseCase.calculate(
        parkingLot?.startsAt,
        new Date()
      );
      // retornar o start time, end time, total time e o fee

      return response.status(200).json({
        object: parkingLot,
        totalTime: `O tempo total é de ${timeExpent} horas`,
        fee: `A taxa sugerida fica em R$${CalculateFeeUseCase.calculateFee(
          timeExpent
        )},00`,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error });
    }
  }
}
export { FindParkingLotsController };
