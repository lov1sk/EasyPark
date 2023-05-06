import dayjs from "dayjs";

class CalculateTimeUseCase {
  calculate(startTime?: Date, endTime?: Date): number {
    if (!startTime || !endTime) {
      throw new Error("Date params must be true");
    }
    return dayjs(endTime).diff(startTime, "hour");
  }
}
export = new CalculateTimeUseCase();
