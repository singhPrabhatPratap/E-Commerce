const express = require("express")
const cors = require("cors")
let db = require("./Databaseconfig.js")
let Productrouters = require("./Route/productRoute.js")
const Adminrouters =require("./Route/AdminRoute.js")
const UserRoute = require("./Route/UserRoute.js")
const UserTablecreate = require("./Route/ClientTableRoute.js")
let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('Uploads'))

db.connect((err)=>{
    if(err) throw err
    else{
        console.log("connected")
    }
})
let tablecreation = `create table if not exists product(
id int auto_increment primary key not null,
productBrand varchar(234),
productRating int,
productType varchar(234),
image varchar(235),
productDesc varchar(235),
productPrice int
);`
db.query(tablecreation,(err,result)=>{  
    if(err)throw err
    else{
        console.log("table created")
    }
})

let Admintable = `create table if not exists Admintable(
    id int auto_increment primary key not null,
   name varchar(234) not null,
   email varchar(234)not null,
   username varchar(234)not null,
   password varchar(234)not null
    );`
    db.query(Admintable,(err,result)=>{
        if(err)throw err
        else{
            console.log("table created")
        }
    })
let Usercollectiontable = `create table if not exists UserList(
    id int auto_increment primary key not null,
   name varchar(234) not null,
   email varchar(234)not null,
   image varchar(234),
   username varchar(234)not null,
   password varchar(234)not null
    );`
    db.query(Usercollectiontable,(err,result)=>{
        if(err)throw err
        else{
            console.log("user table created")
        }
    })

app.use("/api",Productrouters)
app.use("/Admin",Adminrouters)
app.use("/User",UserRoute)
app.use('/clientTable',UserTablecreate)

app.listen(3000,()=>{
    console.log("opened in localhost")
})

