const express = require("express");
const { user } = require("../../controller/");

const router = express.Router();
router.route("/addinfo/:id").post(user.addInfo);


module.exports = router