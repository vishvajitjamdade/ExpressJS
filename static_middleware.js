const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public")); //middleware

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/pages/home.html"));
});

app.listen(1000);