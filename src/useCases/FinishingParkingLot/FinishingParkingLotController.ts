import { Request, Response } from "express";
import { parkModel } from "../../repositories/models/ParkModel";
import DateFormatterUseCase from "../auxiliarFunctions/DateFormatter/DateFormatterUseCase";

class FinishingParkingLotController {
  /**
   * Função principal handle, responsavel por atualizar um registro e finalizar o mesmo
   */
  static async handle(request: Request, response: Response): Promise<Response> {
    // Recuperando o id do registro de estacionamento em questão
    const { id } = request.params;
    try {
      // Recupera o registro atraves do id , salva o tempo previo de saida
      const parkingLot = await parkModel.findByIdAndUpdate(id, {
        status: "Finished",
        endTime: DateFormatterUseCase.format(new Date()),
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
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }
}
export { FinishingParkingLotController };
