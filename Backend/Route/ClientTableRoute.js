const express = require('express')
let router = express.Router()
const ClientTable = require("../Controller/CleintsController")

router.post('/CreateCleintTable/:unique',ClientTable.ClientTable)
router.post('/insertCleintTable/:unique',ClientTable.cartSave)
router.get('/getCart/:unique',ClientTable.getcart)
router.delete('/deleteCart/:unique/:id',ClientTable.deletecart)
module.exports = router