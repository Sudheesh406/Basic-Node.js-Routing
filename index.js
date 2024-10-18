
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
                res.write(data+"<h1>"+q.query.username+"</h>");
                console.log(q.query)
                res.end();
            }
        });
    }else {
        res.writeHead(404,{"content-type":"text/html"});
        res.write("error");
        res.end();
    }
}).listen("5000",(err)=>{
    if(err){
        console.log(err,"error found...")
    }else{
        console.log("Server Running...")
    }
});
