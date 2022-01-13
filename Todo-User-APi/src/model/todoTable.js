import { Schema, model } from "mongoose";
import { ObjectID } from "mongodb";
let todoSchema = new Schema(
  {
    name: { type: String },
    discription: { type: String },
    userId: { type: Schema.Types.ObjectId },
  },
  {
    timeseries: true,
    versionKey: false,
  }
);

const Todo = new model("Todo", todoSchema);
export default Todo;
