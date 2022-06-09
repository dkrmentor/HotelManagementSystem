const { user } = require("../../model");

const SignUp = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    //async function requires try catch block tat wikk bw used in "await"
    // when ever we read/write data from db (models) we use "await"
    //find=> return array //findONe => object
    //left -> mode // right => we pass

    const exUser = await user.findOne({ email: email });
    if (exUser) {
      return res
        .status(400)
        .send({ msg: "email already in use", status: false });
    }
    const newUser = new user({ email: email, password: password, roles: role });

    // console.log(newUser)
    //.validate is a funciton of mongoose it will inherit our validation from model
    await newUser.validate();
    newUser.save();

    return res.status(200).send({ msg: "User Created", status: true });
  } catch (error) {
    // if (error.name === "ValidationError") {

    if (error) {
      let errors = {};
      // console.log('=================error.errors==================')
      // console.log(error.errors)
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });

      // const abc ={
      //   name:'Baby Shark', // 0
      //   age:10,// 1
      //   isMental:false // 2
      // }
      // Object.keys(abc).forEach((key)=>{
      //   console.log(key)
      //   console.log(abc[key])
      // })

      return res.status(400).send(errors);
    }
    // console.log('===============error====================')
    // console.log(error)
    // console.log('================error.name===================')
    // console.log(error.name)
    console.log("=================error.errors==================");
    console.log(error.errors);
    // console.log('==================error._message=================')
    // console.log(error._message)
    res.status(500).send("server not found");
  }
};
const LogIn = async (req, res) => {
  const { email, password, role } = req.body();

  const exUser = await user.findOne({ email: email });
  if (!exUser) {
    return res.status(400).send("user not avalaible");
  }
  if (exUser.password === password) {
    return res.status(200).send({ user: exUser, success: true });
  }
  res.status(400).send({message:'invalid user/password', sucess: false})
};
module.exports = { SignUp, LogIn };
