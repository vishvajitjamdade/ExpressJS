const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to HTTP methods");
});

app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("Registration successfully completed");
});

app.listen(1000);