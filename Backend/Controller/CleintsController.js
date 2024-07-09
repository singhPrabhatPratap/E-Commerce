const db = require('../Databaseconfig.js')
exports.ClientTable=(req,res)=>{
    let unique = req.params.unique
    let tablecreation = `create table if not exists ${unique}(
    id int auto_increment primary key,
    productBrand varchar(234),
    productPrice varchar(234),
    productRating varchar(234),
    productimage varchar(234),
    productType varchar(234)
    )`
    db.query(tablecreation,(err,result)=>{
        if(err)throw err
        else{
            console.log('tablecreated')
        }
    })
}
exports.cartSave=(req,res)=>{
    let unique = req.params.unique
    let productBrand = req.body.productBrand
    let productPrice = req.body.productPrice
    let productRating = req.body.productRating
    let productType = req.body.productType

    let value=[[productBrand,productPrice,productRating,productType]]
  let sql = `insert into ${unique}(productBrand,productPrice,productRating,productType)values ?`
  db.query(sql,[value],(err,result)=>{
    if(err)throw err
    else{
        res.send('data saved')
    }
  })
}
exports.getcart=(req,res)=>{
    let unique = req.params.unique
    let sql = `select * from ${unique}`
    db.query(sql,(err,result)=>{
        if(err)throw err
        else{
            res.json(result)
        }
    })
}
exports.deletecart=(req,res)=>{
    let unique = req.params.unique
    let id = req.params.id
    let sql = `delete from ${unique} where id =${id}`
    db.query(sql,(err,result)=>{
        if(err)throw err
        else{
            res.send('deleted')
        }
    })
}