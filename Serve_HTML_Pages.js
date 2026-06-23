const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"pages/home.html")
    )
});

app.get("/about",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"pages/about.html")
    )
});

app.use((req,res,next)=>{
    console.log("Request received");
    next();
});

app.listen(1000,(req,res)=>{
    console.log(`Server is running on port ${1000}`);
});