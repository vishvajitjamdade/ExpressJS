const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to express");
});

app.get("/about",(req,res)=>{
    res.send("Welcome to About Us Page");
});

app.use((req,res)=>{  //application level middleware
    res.send("URL not found");
})

app.listen(1000);