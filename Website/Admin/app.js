var express = require("express");


var engines = require('consolidate');

var app= express();
 var bodyparser = require("body-parser");

 app.set('views', __dirname + '/views');
 app.engine('html', engines.mustache);
 app.set('view engine', 'html');
 var path =require("path");

 app.use(bodyparser.urlencoded({
     extended:true
 }));

app.use(express.static(path.join(__dirname,"css")));
app.use(express.static(path.join(__dirname,"js")));
app.use(express.static(path.join(__dirname,"images")));
app.use(express.static(path.join(__dirname,"fonts")));


app.get('/',(req,res,next)=>{
   // res.sendFile(path.join(__dirname,'../','template','views','index.html'))
   res.render("index.html");
})

app.listen(3000,()=>{
    console.log("sever!!");
})
