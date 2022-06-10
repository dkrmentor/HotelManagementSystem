const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roomSchema = Schema({ 
  roomNumber: {
    type: Number,
    required: true,
  },
  roomType:{
      type:String,
      required:true,
  },
  floor:{
      type:Number,
      required:true,
  },
  alocatedUser: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
 
});

const room = mongoose.model("room", roomSchema);

module.exports = room;
