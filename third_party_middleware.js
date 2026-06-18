const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/",(req,res)=>{
    res.send("Welcome to express js");
});

const PORT = 1000;

app.listen(PORT,()=>{
    console.log(`server is running on PORT : ${PORT}`)
});