const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("Poster loaded");
    setTimeout(()=>{
        next();
    },5000);
});

app.get("/",(req,res)=>{
    res.send("Welcome To Home Page");
});

app.listen(1000);