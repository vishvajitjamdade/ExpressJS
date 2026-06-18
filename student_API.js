const express = require("express");
const app = express();

const students = [
    {id:1,name:"Sudhir"},
    {id:2,name:"Vishvajit"}
];

app.get("/students",(req,res)=>{
    res.json(students);
});

app.get("/students/:id",(req,res)=>{
    res.send(req.params.id);
});

app.get("/search",(req,res)=>{
    res.send(req.query.name);
});

app.use((req,res,next)=>{
    console.log("Request Received");
    next();
})

app.listen(1000,(req,res)=>{
    console.log(`Server is running on Port : 1000`);
});