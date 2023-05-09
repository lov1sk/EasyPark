import { Request, Response } from "express";
import { ClientModel } from "../../repositories/models/ClientModel";

class findClientsUseCase {
  static async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    const clients = await ClientModel.find({});
    console.log({ clients });
    console.log(clients.length);

    if (!clients) {
      return response
        .status(404)
        .json({ message: "There is no client saved on database" });
    }

    return response.status(200).json({ clients });
  }
  static async findById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    const client = await ClientModel.findById(id);
    console.log({ client });

    if (!client) {
      return response
        .status(404)
        .json({ message: "This client is not saved on database" });
    }

    return response.status(200).json({ client });
  }
}
export { findClientsUseCase };
