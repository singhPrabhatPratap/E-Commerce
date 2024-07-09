const db = require("../Databaseconfig.js")
exports.saveProduct=(req,res)=>{
    let productBrand = req.body.productBrand
    let productRating = req.body.productRating
    let productType = req.body.productType
    let productPrice = req.body.productPrice
    let productDesc = req.body.productDesc
    let image = req.file.filename

    let value = [[productBrand,productPrice,productRating,productType,productDesc,image]]
    db.query("insert into product (productBrand,productPrice,productRating,productType,productDesc,image) values ?",[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("data saved")      
        }
    })
}
exports.getData=(req,res)=>{
    let sql = "select * from product"
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}
exports.getDatabyCat=(req,res)=>{
    let cat = req.params.cat
    let sql = `select * from product where productType=?`
    db.query(sql,[cat],(err,result)=>{
        if(err)throw err
        else{
            res.json(result)
        }
    })
}
exports.getDataById=(req,res)=>{
    let id = req.params.id
    let sql = "select * from product where id=?"
    db.query(sql,[id],(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}
exports.deleteData=(req,res)=>{
    let id = req.params.id
    let sql = `delete from product where id=?`
    db.query(sql,[id],(err,result)=>{
        if(err)throw err
        else{
            console.log("delete")
        }
    })
}
exports.getbySearch=(req,res)=>{
    let inp  = req.params.inp
let sql = `select * from product where productType like ?`
let value = ["%"+inp+"%","%"+inp+"%"]
db.query(sql,value,(err,result)=>{
    if(err)throw err
    else{
        res.json(result)
    }
})
}
exports.UpdateData=(req,res)=>{
    let id = req.params.id
    let val = req.body
    let sql = `update product set ? where id =?`
    db.query(sql,[val,id],(err,result)=>{
        if(err)throw err
        else{
            res.send("data updated")
        }
    })
}