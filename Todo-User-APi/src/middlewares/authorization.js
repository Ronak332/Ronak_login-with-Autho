import { user } from "../model/userData";
import Jwt from "jsonwebtoken";
const secretkey = "Abcd1234567890";

const authorization = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(300).send("Access denied. No token provided");

    // const Token = authorization && authorization.split(" ")[1];
    let token = req.headers.authorization.split(" ")[1];
    // console.log(token)

    const decode = Jwt.verify(token, secretkey);
    let userId = await user.findOne({ _id: decode.id });
    console.log(userId);
    if (!userId) {
      throw new Error("user ID not Found");
    }
    console.log(userId);
    req.currentUser = userId;
    next();
    // res.send({ success: true, message: "User Is available With Token " });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

export default authorization;
