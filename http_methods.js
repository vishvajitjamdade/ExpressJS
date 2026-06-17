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

//update entire data
app.put("/demo1",(req,res)=>{
    console.log("Data Updated");
});

//update partial data like only specific fields
app.patch("/demo",(req,res)=>{
    console.log("Data partially updated");
});

app.delete("/deletedata",(req,res)=>{
    console.log("Data Deleted");
});

app.listen(1000);