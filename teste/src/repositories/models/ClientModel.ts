import mongoose, { Schema, ObjectId, Document } from "mongoose";

const ClientSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: String,
  car: {
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    plate: {
      type: String,
      required: true,
    },
  },
});
export const ClientModel = mongoose.model("clients", ClientSchema);
