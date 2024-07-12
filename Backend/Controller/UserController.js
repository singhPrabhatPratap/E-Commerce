const db = require("../Databaseconfig.js");
const bcrypt = require("bcryptjs");
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
    if (err) throw err;
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
    else {
      bcrypt.compare(password, result[0].password, (err, istrue) => {
        if (err) throw err;
        else {
          if (istrue == true) {
            res.send({ success: true, user: result[0] });
          } else {
            res.send({ success: false });
          }
        }
      });
    }
  });
};
