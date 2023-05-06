import { Request, Response } from "express";
import { ClientModel } from "../../repositories/models/ClientModel";
import { parkModel } from "../../repositories/models/ParkModel";
import DateFormatterUseCase from "../auxiliarFunctions/DateFormatter/DateFormatterUseCase";

class CreateParkController {
  /**
   * Função principal handle, para lidar com o cadastro de um novo registro de estacionamento,
   * onde este sera salvo no banco de dados e enviado uma resposta a requisição com o objeto criado e uma mensagem de OK
   */
  static async handle(request: Request, response: Response): Promise<Response> {
    // Recuperando o cliente passado para novo cadastro
    const { client } = request.body;

    try {
      // Ao enviar o forms, primeiro ele cria um cliente
      const clientCreated = await ClientModel.create(client);

      // Um registro criado a partir do cliente cadastrado, recuperando seu Id
      const newParkingLot = {
        client: clientCreated._id,
        startsAt: new Date(),
        startTime: DateFormatterUseCase.format(new Date()),
      };
      // Salvando o registro criado no banco de dados
      const parkingLotCreated = await parkModel.create(newParkingLot);
      return response.status(201).json({
        object: parkingLotCreated,
        message: "ParkingLot created sucessfully",
      });
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }
}

export { CreateParkController };
