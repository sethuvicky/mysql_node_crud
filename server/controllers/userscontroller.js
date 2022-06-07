const mysql = require("mysql")

const con = mysql.createPool({
    connectionLimit:10,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database: process.env.DB_NAME
})
exports.view = ((req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        connection.query("select * from user",(err,rows)=>{
            connection.release();
            if(!err){
                res.render("home",{rows})
                console.log(rows)
            }else{
                console.log(err)
            }

        })
     })

})

exports.adduser = ((req,res)=>{
    res.render("adduser")
})

exports.save = ((req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        const {name,age,city} =req.body
        connection.query("insert into user (NAME,AGE,CITY) values (?,?,?)",[name,age,city],(err,rows)=>{
            connection.release();
            if(!err){
                res.redirect("/")
                console.log(rows)
            }else{
                console.log(err)
            }

        })
     })

 })

 exports.edituser = ((req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        let {id} =req.params
        connection.query("select * from user where id=?",[id],(err,rows)=>{
            connection.release();
            if(!err){
                res.render("edituser",{rows})
                console.log(rows)
            }else{
                console.log(err)
            }

        })
     })
})


exports.edit = ((req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        const {name,age,city} =req.body
        let {id} =req.params

        connection.query("update user set NAME=?,AGE=?,CITY=? where ID=?",[name,age,city,id],(err,rows)=>{
            connection.release();
            if(!err){
                res.redirect("/")
                console.log(rows)
            }else{
                console.log(err)
            }

        })
     })

 })

 exports.delete = ((req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        let {id} =req.params

        connection.query("delete from user where ID=?",[id],(err,rows)=>{
            connection.release();
            if(!err){
                res.redirect("/")
                console.log(rows)
            }else{
                console.log(err)
            }

        })
     })

 })