"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dayjs_1 = __importDefault(require("dayjs"));
class DateFormatter {
    format(date) {
        if (!date) {
            throw new Error("Date must be a valid argument");
        }
        return `${(0, dayjs_1.default)(date).format("HH:mm[ - ]DD/MM/YYYY")}`;
    }
}
module.exports = new DateFormatter();
