import user from "../model/userData";
const secretkey = "Abcd1234567890";
import Jwt from "jsonwebtoken";

const signupUser = async (req, res) => {
  try {
    let email = req.body.email;
    console.log(email);

    let userExist = await user.findOne({ email: email });
    console.log(userExist);

    if (userExist) throw new Error("Email id Already used");

    let savedData = await user.create(req.body);

    savedData && res.send({ success: true, message: "sign up Successfully" });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    let { email, password } = req.body;

    let userExist = await user.findOne({
      email: email,
      password: password,
    });

    if (!userExist) throw new Error("user not Excist");
    // const secretkey = process.env.secretkey
    let token = Jwt.sign(
      { id: userExist.id, email: userExist.email },
      secretkey,
      { expiresIn: "1h" }
    );

    userExist &&
      res.send({
        success: true,
        message: "Login Succesfully",
        data: {
          Id: userExist.id,
          email: userExist.email,
          token: token,
        },
      });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    let userExist = await user.find({});
    res.send({ success: true, data: userExist });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

const deleteData = async (req, res) => {
  try {
    //   let userExist = await user.deleteOne({ _id: req.params.id });

    //   if (!userExist) {
    //     throw new Error("user not Exist");
    //   }

    //   userExist && res.send({ success: true, message: "user Delet" });
    

    if (!token) {
      throw new Error("Id not Found");
    }
    var decode = jwt.verify(token, secretkey);
    let userId = decode.id;
    console.log(userId);

    let userExist = await user.deleteOne({ _id: userId });

    if (!userExist) {
      throw new Error("user not Exist");
    }

    userExist && res.send({ success: true, message: "user Delet" });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

const updateData = async (req, res) => {
  try {
    let userExist = await user.findOneAndUpdate({ _id: userId }, req.body);

    if (!userExist) {
      throw new Error("user not Exist");
    }
    userExist && res.status(200).send({ success: true, message: "Update" });
  } catch (error) {
    // console.log(error);
    res.status(400).send({ success: false, message: error.message });
  }
};

export default { signupUser, login, findAll, deleteData, updateData };
