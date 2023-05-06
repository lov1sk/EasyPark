"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Mongoose {
    static async startMongoDb() {
        try {
            await mongoose_1.default.connect("mongodb://127.0.0.1:27017/easyPark");
            console.log("Connected to MongoDb");
        }
        catch (error) {
            console.log({ message: error });
        }
    }
}
exports.default = Mongoose;
