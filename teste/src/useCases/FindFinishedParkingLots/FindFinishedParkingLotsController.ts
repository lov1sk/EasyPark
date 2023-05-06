import { Request, Response } from "express";
import { parkModel } from "../../repositories/models/ParkModel";
import DateFormatterUseCase from "../auxiliarFunctions/DateFormatter/DateFormatterUseCase";
import CalculateTimeUseCase from "../auxiliarFunctions/CalculateTimeUseCase/CalculateTimeUseCase";
import CalculateFeeUseCase from "../auxiliarFunctions/CalculateFeeUseCase/CalculateFeeUseCase";

class FindFinishedParkingLotsController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const parks = await parkModel
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
  static async findById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    const park = await parkModel.findById(id).populate("client");
    const timeExpent = CalculateTimeUseCase.calculate(
      park?.startsAt,
      park?.endsAt
    );

    if (!park) {
      return response.status(422).json({ message: "Parking not found" });
    }

    return response.status(200).json({
      parking: park,
      fee: `A taxa sugerida fica em R$${CalculateFeeUseCase.calculateFee(
        timeExpent
      )},00`,
      message: "hello",
    });
  }
}

export { FindFinishedParkingLotsController };
