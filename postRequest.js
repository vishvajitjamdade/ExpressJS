const express = require("express");
const app = express();

app.use(express.json());

app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send("Request Received");
});

app.use((req,res,next)=>{
    console.log("Request Received");
    next();
})

app.listen(1000,()=>{
    console.log("Server is running on 1000");
})