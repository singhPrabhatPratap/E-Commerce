const db = require("../Databaseconfig.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
function generatewebToken(user){
  return jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRESIN,})
}

exports.saveUser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let image = req.file.filename;
  let username = req.body.username;
  let password = req.body.password;
  let hashPassword = await bcrypt.hash(password, 10);
  let value = [[name, email, image, username, hashPassword]];
  let sql = `insert into userlist(name,email,image,username,password) values ?`;
  db.query(sql, [value], (err, result) => {
    if (err) {
      res.send(err)
    }
    else {
      res.send("data saved");
    }
  });
};

exports.clientlogin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let sql = `select * from userlist where email = ?`;
  db.query(sql, [[email]], (err, result) => {
    if (err) throw err;
    if(result.length>0) {
      bcrypt.compare(password, result[0].password, async(err, istrue) => {
        if (err) throw err;
        else {
          if (istrue == true) {
            let token = await generatewebToken(result[0])
            res.send({ success: true, user: result[0] ,message:"Logged In" ,tokens:token});
          } else {
            res.send({ success: false,message:"Please Enter a Valid Email or Password !" });
          }
        }
      });
    }
    else{
      res.send({message:'Please enter a valid email or password !'})
    }
  });
};

exports.getval = async(req,res)=>{
  let token = req.headers['authorization'].split(" ")[1]
  // console.log(token)
  jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
    if(err)throw err
    else{
      // console.log(decode)
      let sql = 'select * from userlist where id=?'
      db.query(sql,[decode.id],(err,result)=>{
        if(err)throw err
        else{
          res.json(result)
        }
      })
    }
  })
 
}
