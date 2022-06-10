const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userInfoSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
    min: [16, "enter a valid cnic number"],
    max: [16, "enter a valid cnic number"],
    // match: [
    //     /^[0-9]{5}-[0-9]{7}-[0-9]$/,
    //     "Please fill a valid email address",
    //   ],
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
    min: [11, "enter a valid number"],
    max: [11, "enter a valid number"],
  },
  noOfPersons: {
    type: Number,
    required: true,
  },
  noOfDays: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    //foreign key  here and primary in user
    ref: "user",
  },
  hotel: {
    type: Schema.Types.ObjectId,
    //foreign key  here and primary in user
    ref: "hotel",
  },
});

const userInfo = mongoose.model("userInfo", userInfoSchema);

module.exports = userInfo;
