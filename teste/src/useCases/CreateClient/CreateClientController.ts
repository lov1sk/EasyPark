import { Request, Response } from "express";
import { ClientModel } from "../../repositories/models/ClientModel";

class CreateClientController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const client = request.body;

    try {
      await ClientModel.create(client);
      return response.status(201).json({ message: "Client created" });
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }
}

export { CreateClientController };
