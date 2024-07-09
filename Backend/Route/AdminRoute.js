const express = require("express")
const router = express.Router()
const Controller = require("../Controller/AdminController")

router.post('/Adminlogin',Controller.AdminLogin)
module.exports = router