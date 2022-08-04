 const express = require("express");
 const app = express();
 const bodyparser = require("body-parser");
 const mysql = require("mysql2");
 const cors = require("cors");

 const_db = mysql.createPool({
    host : "localhost",
    user: "root",
    password: "",
    database: "stats_db"
 })
 
 
 app.use(cors());
 app.use(express.json());
 app.use(bodyparser,urlencoded({extended: true}));

 app.get("/api/get", (req, res) =>{
    const sqlget = "select * FROM liste_joueur ;"
    db.query(sqlget,(error, result) => {
        res.send("Hello Express" );
    });
 } );


//  app.get("/",(req,res) => {
//     const sqlinsert = "insert into liste_joueur (nom et prenoms, poste, club, contact,) values ('john Davis', 'attaquant','gomido', 90000000)";
//     res.send("Hello express");
//     db.query(sqlinsert, (error,result) => {
//         console.log("error", error);
//         console.log("result", result);
//         res.send("Hello world");
//     });
//  } );

 app.listen(5000,  () => {
    console.log("server is running on port 5000 ");


 } )