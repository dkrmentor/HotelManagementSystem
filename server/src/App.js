const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connection =require("./config");
const { auth ,user } = require('./router');
const  Connection  = require('./config');
//data from env
dotenv.config();


const App = express();
App.use(express.json());
App.use(cors());

App.get('/',(req,res)=>{
    res.status(200).send("dhara here")
})

App.use("/auth",auth)
App.use("/user",user)

Connection.once("open",()=>{
console.log("db connect")
})
//   App.listen(9000);

const PORT = process.env.PORT || 9000;
App.listen(PORT,()=>{
    console.log(`listening at server ${PORT}`)
})
