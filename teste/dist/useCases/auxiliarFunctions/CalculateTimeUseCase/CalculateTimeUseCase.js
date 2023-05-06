"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dayjs_1 = __importDefault(require("dayjs"));
class CalculateTimeUseCase {
    calculate(startTime, endTime) {
        if (!startTime || !endTime) {
            throw new Error("Date params must be true");
        }
        return (0, dayjs_1.default)(endTime).diff(startTime, "hour");
    }
}
module.exports = new CalculateTimeUseCase();
