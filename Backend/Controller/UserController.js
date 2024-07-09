const db = require("../Databaseconfig.js")
exports.saveUser=(req,res)=>{
    let name = req.body.name
    let email=req.body.email
    let image = req.file.filename
    let username = req.body.username
    let password = req.body.password
    let value = [[name,email,image,username,password]]
    let sql = `insert into userlist(name,email,image,username,password) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err)throw err
        else{
            res.send('data saved')
        }
    })
}


exports.clientlogin = (req,res)=>{
    let email= req.body.email
    let password = req.body.password

    let sql = `select * from userlist where email = ? and password=?`
    db.query(sql,[[email],[password]],(err,result)=>{
if(err)throw err
else{
  if (result.length > 0) {
    res.send({ success: true, user: result[0] })
  } else {
    res.send({ success: false })
  }
     }
    })

}