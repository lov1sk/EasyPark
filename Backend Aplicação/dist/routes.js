"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const CreateClientController_1 = require("./useCases/CreateClient/CreateClientController");
const CreateParkController_1 = require("./useCases/CreateParkingLot/CreateParkController");
const findClients_1 = require("./useCases/FindClients/findClients");
const FinishingParkingLotController_1 = require("./useCases/FinishingParkingLot/FinishingParkingLotController");
const FindParkingLotsController_1 = require("./useCases/FindParkingLots/FindParkingLotsController");
const FindActiveParkingLotsController_1 = require("./useCases/FindActiveParkingLots/FindActiveParkingLotsController");
const FindFinishedParkingLotsController_1 = require("./useCases/FindFinishedParkingLots/FindFinishedParkingLotsController");
const routes = (0, express_1.Router)();
exports.routes = routes;
// test api
routes.get("/", async (request, response) => {
    return response.status(200).json({ message: "Hello World" });
});
/**
 * Rotas para clientes
 */
// Show all the clients saved on database
routes.get("/client", findClients_1.findClientsUseCase.findAll);
// Show a specific client saved on database
routes.get("/client/:id", findClients_1.findClientsUseCase.findById);
// Create a client on database
routes.post("/client", CreateClientController_1.CreateClientController.handle);
/**
 * Rotas para registros de estacionamentos
 */
// Show all the parkinglots saved on database
routes.get("/park", FindParkingLotsController_1.FindParkingLotsController.findAll);
// Show a specific parkinglot saved on database
routes.get("/park/:id", FindParkingLotsController_1.FindParkingLotsController.findById);
// Show all parkinglots with status "active" saved on database
routes.get("/parksActive", FindActiveParkingLotsController_1.FindActiveParkingLotsController.findAll);
// Show a specific parkinglot with status "active" saved on database
routes.get("/parksActive/:id", FindActiveParkingLotsController_1.FindActiveParkingLotsController.findById);
// Show all parkinglots with status "active" saved on database
routes.get("/parksFinished", FindFinishedParkingLotsController_1.FindFinishedParkingLotsController.handle);
// Show a specific parkinglot with status "finished" saved on database
routes.get("/parksFinished/:id", FindFinishedParkingLotsController_1.FindFinishedParkingLotsController.findById);
// Updating and finishing a parkinglot (only to update)
routes.put("/park/finish/:id", FinishingParkingLotController_1.FinishingParkingLotController.handle);
// Create a parkinglot
routes.post("/park/new", CreateParkController_1.CreateParkController.handle);
