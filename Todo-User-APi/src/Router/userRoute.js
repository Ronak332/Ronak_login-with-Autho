import express from "express";
import { userController } from "../controller";
import authorization from "../middlewares/authorization";

export default express
  .Router()
  .post("/signup", userController.signupUser)
  .post("/login", userController.login)
  .get("/findAll", userController.findAll)
  .delete("/deleteData", userController.deleteData)
  .put("/update/:id", userController.updateData);
