/**
 * Vai receber o usuario junto com o carro, e vai salvar o registro em park, deixando o status como default em active
 */

import mongoose, { Schema } from "mongoose";

const parkSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  client: {
    type: Schema.Types.ObjectId,
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
export const parkModel = mongoose.model("parks", parkSchema);
