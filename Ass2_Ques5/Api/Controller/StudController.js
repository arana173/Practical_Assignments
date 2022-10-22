const student = require("../Model/studModel");
const jwt = require("jsonwebtoken");

const getToken = (req,res)=>{
    try{
        const token = jwt.sign({id:req.params.id},'secret',{expiresIn:"30d"});
        res.send(token);
    }
    catch(err)
    {
        console.log(err);
    }
}

const display = async(req,res)=>{
    try{
        var data = await student.find({});
       // res.json({response : data});
        res.send(data);
    }
    catch(err)
    {
        console.log(err);
    }
};

const add = async(req,res)=>{
    try{
        var stud = new student({
            rno : req.body.rno,
            name : req.body.name,
            semester : req.body.semester,
            department : req.body.department,
            age : req.body.age
        });
        student.create(stud,(err,data)=>{
            if(err)
            console.log(err)
            else
            res.send("New Student added successfully");
        });
    }
    catch(err)
    {
        console.log(err);
    }
};

const deleteRec = async(req,res)=>{
    try
    {
        student.findByIdAndRemove({"_id":req.params.id},(err)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.send("record deleted successfully");
            }
        });
    }
    catch(err)
    {
        console.log(err);
    }
}

const update = async(req,res)=>{
    try{
         var data = await student.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,data)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.send("Record updated successfully");
            }
        });
    }
    catch(err)
    {
        console.log(err);
    }
}

const getById = async(req,res)=>{
    try{
        await student.findOne({_id:req.params.id},(err,data)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.send(data);
            }
        });
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = {display,add,deleteRec,update,getById,getToken} 