// ------Trying this without express---------

let http = require("http")
let fs = require("fs");
let url = require ("url")
http.createServer((req,res)=>{
    let q = url.parse(req.url,true);
    if(q.pathname === "/"){
        fs.readFile("signup.html",(err,data)=>{
            if(err){
                console.log(err,"error found...");
                res.writeHead(500, { "content-type": "text/html" });
                res.end();
            }else{
                res.writeHead(200,{"content-type":"text/html"});
                res.write(data)
                res.end();
            }
        });
    }else if(q.pathname === "/signupaction"){
        fs.readFile("index.html",(err,data)=>{
            if(err){
                console.log(err,"error found...");
                res.writeHead(500, { "content-type": "text/html" });
                res.end();
            }if(data){
                res.writeHead(200,{"content-type":"text/html"});
                res.write(data+"<h1>"+q.query.password+"</h>");
                console.log(q.query)
                res.end();
            }
        });
    }else {
        res.writeHead(404,{"content-type":"text/html"});
        res.write("error");
        res.end();
    }
}).listen("3000",(err)=>{
    if(err){
        console.log(err,"error found...")
    }else{
        console.log("Server is Running on 3000...")
    }
});

// -------Trying the same functions with express----------

// let fs = require("fs");
// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   fs.readFile("signup.html", "utf-8", (err, data) => {
//     if (err) return res.status(500).json("error");
//     res.status(200).send(data);
//   });
// });
// app.get("/signupaction", (req, res) => {
//   console.log(req.query);
//   fs.readFile("index.html", "utf-8", (err, data) => {
//     if (err) return res.status(500).json("error");
//     const username = req.query.username;
//     res.status(200).send(`${data}<h1>${username}</h1>`);
//   });
// });

// app.listen(3000, (err) => {
//     if(err){
//   console.log(err,"error found...");
//     }else{
//         console.log("server is running on 3000..."); 
//     }
// });
