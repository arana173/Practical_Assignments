const student = require("../model/StudModel");

const addForm = (req,res)=>{
    console.log("Displaying the form");
    res.render("Insert");
}

const editForm = (req,res)=>{
    res.render("edit");
}

const add = async(req,res)=>{
    try{
        console.log(req.body);
        var data = new student({
            Rollno:req.body.rno,
            Name:req.body.name,
            Semester:req.body.sem,
            Department:req.body.dept,
            Age:req.body.age,
            City:req.body.city 
        })
        var saveddata=  await student.create(data);
        res.send("Success");
        console.log("Student created successfully");
    }
    catch(err)
    {
        console.log(err);
    }
};

const display = async(req,res)=>{
    try{

        var stud =await student.find({});
        console.log("Student data :\n" + stud);
        res.render("home",{data:stud})
    }
    catch(err)
    {
        console.log(err);
    }
}

// const getall=(req,res)=>{

// }
const getOne = async(req,res)=>{
    try{
        var stud = await student.findOne({"_id":req.params.id},(err,data)=>{
            if(err)
            console.log(err);
            res.json(data);
        })
    }
    catch(err)
    {
        console.log(err);
    }
}

const deleteStud = async(req,res)=>{
    try{
            var delStud = await student.findByIdAndRemove({"_id":req.params.id},()=>{
            res.redirect("/");
        });
    }
    catch(err)
    {
        console.log(err);
    }
}

const updateStud = async(req,res)=>{
    try{
            var {id} = req.params
            var updStud = await student.findOneAndUpdate({"_id":id},req.body,{new:true},(err,data)=>{
                res.send(data);
            });
          
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = {addForm,add,display,getOne,deleteStud,updateStud,editForm};