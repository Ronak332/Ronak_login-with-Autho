import express from "express";
const app = express();
import bodyParser from "body-parser";

var jsonParser = bodyParser.json();
require("./src/config/connection");
import { userRoute , todoRoute } from "./src/Router";

app.use(jsonParser);

app.use(userRoute);
app.use(todoRoute);

const port = 4040;

app.listen(port, () => {
  console.log(`Server Start on ${port}`);
});
