import { Request, Response } from "express";
import { parkModel } from "../../repositories/models/ParkModel";
import CalculateTimeUseCase from "../auxiliarFunctions/CalculateTimeUseCase/CalculateTimeUseCase";
import CalculateFeeUseCase from "../auxiliarFunctions/CalculateFeeUseCase/CalculateFeeUseCase";

class FindActiveParkingLotsController {
  /**
   * Metodo para resgatar todos os registros salvos no banco de dados
   */
  static async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    //Busca na base de dados todos os registros salvos, filtrando por seu status "ativo"
    const parks = await parkModel.find({ status: "Active" }).populate("client");

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
  static async findById(
    request: Request,
    response: Response
  ): Promise<Response> {
    //Recupera o id da requisição e faz uma busca no banco para o registro
    const { id } = request.params;
    const park = await parkModel.findById(id).populate("client");

    //Se não achar, retorna uma mensagem de "not found"
    if (!park) {
      return response.status(422).json({ message: "Parking not found" });
    }
    // Se achar, realiza o calculo de tempo entre o registro de entrada e a data atual
    const timeExpent = CalculateTimeUseCase.calculate(
      park?.startsAt,
      new Date()
    );

    return response.status(200).json({
      parking: park,
      totalTime: `O tempo total é de ${timeExpent} horas`,
      fee: `A taxa sugerida fica em R$${CalculateFeeUseCase.calculateFee(
        timeExpent
      )},00`,
    });
  }
}
export { FindActiveParkingLotsController };
