import express from "express";
import  {todoController } from "../controller" ;

export default express 
.Router()
.put("/addTodo", todoController.todoAdd)
.get("/getTodo",todoController.todoFind)
.get("/findUserIdTodo/:id" ,todoController.FindUserId)
.delete("/deleteData/:id", todoController.deleteTodo);


