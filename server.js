const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages/home.html"));
});

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages/about.html"));
});

app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send("Received");
})

app.listen(1000);