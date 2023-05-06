import dayjs from "dayjs";
class DateFormatter {
  format(date?: Date): String {
    if (!date) {
      throw new Error("Date must be a valid argument");
    }

    return `${dayjs(date).format("HH:mm[ - ]DD/MM/YYYY")}`;
  }
}

export = new DateFormatter();
