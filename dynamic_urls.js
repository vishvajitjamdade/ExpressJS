const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Dynamic URLs");
});

//HERE DATA IS GET THROUGH URLS -- UNSEURE BECUASE DATA IS DISPLAYED IN URLS
// app.get("/profile/:username/:password",(req,res)=>{
//     if(req.params.username == "admin" && req.params.password == "1234"){
//         res.send("Login Successful");
//     }
//     else{
//         res.send("Login Fail");
//     }
// });

//SECURE DATA -- DOES NOT EXPOSE DATA HERE WHEN WE USE POSTMAN
app.post("/login",(req,res)=>{
    if(req.body.username == "admin" && req.body.password == "1234"){
        res.send("Login Successful");
    }
    else{
        res.send("Login Fail");
    }
})

app.listen(1000);