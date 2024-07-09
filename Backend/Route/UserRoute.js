const express = require("express")
const UserController = require('../Controller/UserController')
let route = express.Router()
let uploads  = require('../multerConfig.js')
route.post("/SaveUser",uploads.single('image'),UserController.saveUser)
route.post("/UserLogin",UserController.clientlogin)

module.exports = route