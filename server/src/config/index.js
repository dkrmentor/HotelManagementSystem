const mongoose = require("mongoose");
mongoose.connect( "mongodb://127.0.0.1:27017/ems",{useUnifiedTopology:true})
const connection = mongoose.connection
module.exports = connection