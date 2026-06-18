const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Home Page");
});

app.get("/about",(req,res)=>{
    res.send("This is the about page");
});

app.listen(1000,()=>{
    console.log(`Server is running on port : 1000`);
});