const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    minlength: [8, "must be atleast 8"],
    //min is used for number
    required: true,
  },
  roles: {
    type: String,
    //choice
    enum: {
      values: ["user", "admin"],
      message: "role musr be admin or user",
    },
    // default: "user",
    required: true,
  },
});

//string user is used for
const user = mongoose.model("user", userSchema);
module.exports = user;
