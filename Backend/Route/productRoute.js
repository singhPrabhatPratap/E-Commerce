const express = require("express")
const router = express.Router()
let controller = require("../Controller/productController")
let uploads= require("../multerConfig.js")
router.post("/postData",uploads.single('image'),controller.saveProduct)
router.get("/getData",controller.getData)
router.get("/getDatabycat/:cat",controller.getDatabyCat)
router.put("/updateData/:id",controller.UpdateData)
router.delete("/deleteData/:id",controller.deleteData)
router.get("/getDatabyid/:id",controller.getDataById)
router.get("/getDatabysearch/:inp",controller.getbySearch)

module.exports=router