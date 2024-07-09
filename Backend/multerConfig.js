const multer = require('multer')
const path = require("path")

let storage = multer.diskStorage({
    destination:'./Uploads',
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+ path.extname(file.originalname))
    }
})

module.exports =multer({storage:storage})