const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

app.get("/",function(req,res){
    fs.readFile("index.html",function(err,data){
        res.write(data);
        res.end("");
    });
});

app.listen("4000",function(){
    console.log("Server Başladı, Port:4000")
});