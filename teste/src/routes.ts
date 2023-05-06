import { Router, Request, Response } from "express";
import { CreateClientController } from "./useCases/CreateClient/CreateClientController";
import { CreateParkController } from "./useCases/CreateParkingLot/CreateParkController";
import { findClientsUseCase } from "./useCases/FindClients/findClients";
import { FinishingParkingLotController } from "./useCases/FinishingParkingLot/FinishingParkingLotController";
import { FindParkingLotsController } from "./useCases/FindParkingLots/FindParkingLotsController";
import { FindActiveParkingLotsController } from "./useCases/FindActiveParkingLots/FindActiveParkingLotsController";
import { FindFinishedParkingLotsController } from "./useCases/FindFinishedParkingLots/FindFinishedParkingLotsController";

const routes = Router();

// test api
routes.get(
  "/",
  async (request: Request, response: Response): Promise<Response> => {
    return response.status(200).json({ message: "Hello World" });
  }
);

/**
 * Rotas para clientes
 */
// Show all the clients saved on database
routes.get("/client", findClientsUseCase.findAll);
// Show a specific client saved on database
routes.get("/client/:id", findClientsUseCase.findById);
// Create a client on database
routes.post("/client", CreateClientController.handle);

/**
 * Rotas para registros de estacionamentos
 */
// Show all the parkinglots saved on database
routes.get("/park", FindParkingLotsController.findAll);
// Show a specific parkinglot saved on database
routes.get("/park/:id", FindParkingLotsController.findById);
// Show all parkinglots with status "active" saved on database
routes.get("/parksActive", FindActiveParkingLotsController.findAll);
// Show a specific parkinglot with status "active" saved on database
routes.get("/parksActive/:id", FindActiveParkingLotsController.findById);
// Show all parkinglots with status "active" saved on database
routes.get("/parksFinished", FindFinishedParkingLotsController.handle);
// Show a specific parkinglot with status "finished" saved on database
routes.get("/parksFinished/:id", FindFinishedParkingLotsController.findById);

// Updating and finishing a parkinglot (only to update)
routes.put("/park/finish/:id", FinishingParkingLotController.handle);
// Create a parkinglot
routes.post("/park/new", CreateParkController.handle);

export { routes };
