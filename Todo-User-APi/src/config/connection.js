import { connect } from "mongoose";
connect("mongodb+srv://Ronak:12345@cluster0.hqbsg.mongodb.net/todo-data", {
  useNewUrlParser: true,
  useunifiedTopology: true,
}).then(() => {
  console.log("DB connected");
});
