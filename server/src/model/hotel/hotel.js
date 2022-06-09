const mongoose = require("mongoose");
// const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema;

const hotelSchema = Schema({
  name: {
    type: "String",
    required: true,
  },
  noOfRooms: {
    type: Number,
    required: true,
  },
  perDayPrice: {
    type: Number,
    required: true,
  },
  Services: {
    type: [String],
    required: true,
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});
const hotel = mongoose.model("hotel", hotelSchema);
module.exports = hotel;
