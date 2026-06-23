const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages/home.html"));
});

app.use((req,res,next)=>{
    console.log("Request Received");
    next();
})

app.listen(1000,()=>{
    console.log("Server is running on 1000");
})