"use strict";
/**
 * Vai receber o usuario junto com o carro, e vai salvar o registro em park, deixando o status como default em active
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parkModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const parkSchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    client: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "clients",
        required: true,
    },
    status: {
        type: String,
        default: "Active",
    },
    startsAt: {
        type: Date,
    },
    endsAt: {
        type: Date,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
});
exports.parkModel = mongoose_1.default.model("parks", parkSchema);
