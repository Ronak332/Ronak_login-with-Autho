import mongoose, { model } from "mongoose";

let userSchema = new mongoose.Schema(
  {
    email: { type: String },
    password: { type: String },
    name: { type: String },
    phone: { type: String },
  },
  {
      timeseries : true,
      versionKey : false,
  }
);
const user = new model("user",userSchema)
export default user;
