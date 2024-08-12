const mysql = require("mysql")
let connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port:process.env.DB_PORT ||3306
})
module.exports = connection
