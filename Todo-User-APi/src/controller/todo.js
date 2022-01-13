import Todo from "../model/todoTable";
import user from "../model/userData";
import { ObjectID } from "mongodb";


const todoFind = async (req, res) => {
  try {
    let todoList = await Todo.find({});
    res.send({ success: true, data: todoList });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const todoAdd = async (req, res) => {
  try {
    let savedata = await Todo.create(req.body);
    if (!savedata) {
      throw new Error("Data not Exist");
    }
    savedata && res.send({ success: true, message: savedata });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};

const FindUserId = async (req, res) => {
  try {
    console.log(req.params.id);
    let todoList = await user.aggregate([
      { $match: { _id: ObjectID(req.params.id) } },
      {
        $lookup: {
          from: "todos",
          localField: "_id",
          foreignField: "userId",
          as: "userData",
        },
      },
    ]);

    res.send({ success: true, message: todoList });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const deleteTodo = async (req,res) => {
  try {
    let todoList = await todo.deleteOne({userID : req.params.id})
        console.log(todoList)
        res.send({success : true , message :"user delete "} );
  } catch (error) {
    res.send({success : false , message :" user not exist"});
  }      
}

export default { todoFind, todoAdd, FindUserId, deleteTodo };
