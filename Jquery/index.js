const { response } = require('express');
const express = require('express');

//test
const app = express();
const test = express();


app.get("/",function(request,response){
    response.send("HEY");
})

app.get("/contact",function(request,response){
    response.send("no");
})

app.listen(3000,function(){
    console.log("server started: 3000");
})
