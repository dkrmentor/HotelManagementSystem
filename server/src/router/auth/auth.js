const express = require("express")
const { auth } = require("../../controller")
const router = express.Router()
router.route("/Signup").post(auth.SignUp)
router.route("/Login").post(auth.LogIn)

module.exports = router