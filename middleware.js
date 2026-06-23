const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("This is home page");
});

app.get("/about",(req,res)=>{
    res.send("This is About page");
})

app.use((req,res,next)=>{
    console.log("Request received");
    next();
})

app.listen(1000,()=>{
    console.log("Server is running on port : 1000");
});