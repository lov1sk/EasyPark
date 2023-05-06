import mongoose from "mongoose";

export default class Mongoose {
  static async startMongoDb() {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/easyPark");
      console.log("Connected to MongoDb");
    } catch (error) {
      console.log({ message: error });
    }
  }
}
