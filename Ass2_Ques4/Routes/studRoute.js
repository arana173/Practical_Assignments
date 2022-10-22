const studRoute = require("express").Router();
const student = require("../model/StudModel");
const {addForm,add,display,getOne,deleteStud,updateStud,editForm} = require("../controller/StudController");

//Display form to add data
studRoute.get("/add",(req,res)=>{
    res.render("Insert");
});

//add new student data to database
studRoute.post("/add",async(req,res)=>{
    try{
        console.log(req.body);
        var data = new student({
            Rollno : req.body.rno,
            Name : req.body.sname,
            Semester : req.body.sem,

            Department:req.body.dept,
            Age:req.body.age,
            City:req.body.city             
        });
        var saveData = student.create(data);
        res.redirect("/");
    }
    catch(err)
    {
        console.log(err);
    }
});

studRoute.get("/",async(req,res)=>{
    try{
        var data = await student.find({});
        console.log("Students : \n" + data);
        res.render("home",{data:data});
    }
    catch(err)
    {
        console.log("Error" + err);
    }
});

studRoute.get("/delete/:id",async(req,res)=>{
    try{
        var delStud = await student.findByIdAndRemove({"_id":req.params.id},()=>{
            res.redirect("/");
        });
    }
    catch(err)
    {
        console.log(err);
    }
});

studRoute.get("/update/:id", (req,res)=>{
    try{
        var data = student.findById({"_id":req.params.id},(err,data)=>{
                if(err)
                {
                    console.log("Error : \n" + err);
                }
                else
                {
                    res.render("edit",{data:data});
                }
        });
    }
    catch(err)
    {
        console.log(err);
    }
});

studRoute.post("/update/:id",async (req,res)=>{
    try{
        var id = req.body._id;

        var data = new student
        ({
            Name : req.body.sname,
            Semester : req.body.sem,
            Department : req.body.dept,
            Age : req.body.age,
            City : req.body.city
        });

        var updStud = await student.findOneAndUpdate({_id:id},data,{new:true},(err,data)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Update student : " + data);
                res.redirect("/");
            }
        }); 
    }
    catch(err)
    {
        console.log(err);
    }
});

module.exports = studRoute;