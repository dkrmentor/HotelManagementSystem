const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = Schema({
 bankName:{
     type:String,
     required:true,
 },
creditCardNumber:{
    type:String,
    required:true,
    
},
cardCode:{
    type:Number,
    required:true,
},
expiryDate:{
    type:Date,
    required:true,
}
});

//string payment is used for
const payment = mongoose.model("payment", paymentSchema);
module.exports = payment;
