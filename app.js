const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./models/students");
const port = process.env.PORT || 9000;

app.use(express.json());


//Creating new stud:

app.post("/students", (req, res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        req.status(201).send(user);
    }).catch((e)=>{
       res.status(400).send(e); 
    });


    res.send( "Hi!! there, Today m focusing on a JavaScript runtime built on Chrome's V8 JavaScript engine Likewise.");
});
  
app.listen(port,  (req,res)=>{
    console.log("server is running on 9000");
    
    
});