const express = require("express");
const app = express();
const router = express.Router(); //middleware

router.use((req,res,next)=>{
    console.log("Poster loaded");
    setTimeout(()=>{
        next();
    },5000);
});

router.get("/",(req,res)=>{
    res.send("Welcome To Home Page");
});

app.use("/api",router);
app.listen(1000);