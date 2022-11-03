const vehicles = require("../Models/vehicleData");
const categories = require("../Models/category");
const vehRoute = require("express").Router();
const multer = require("multer");

var options = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./uploads');
    },
    filename : function(req,file,cb){
        cb(null,file.originalname );
    }
});

var upload = multer({storage:options});

vehRoute.get("/",async(req,res)=>{
    try{
        
        var data = await vehicles.find({});
        console.log("Vehicles :\n" + data);
        res.render("home",{data:data});
    }
    catch(err)
    {
        console.log(err);
    }
});

vehRoute.post("/add",upload.single("vehicle_picture"),async(req,res)=>{
    try{
            let vehPrice = req.body.price;
            
            for(let i=0;i<req.body.noOfYears;i++)
            {
                var temp = vehPrice * req.body.depreciation/100;
                vehPrice = vehPrice - temp; 
            }

            var data = new vehicles({
                    vehicle_brand :req.body.vehicle_brand,
                    category_name : req.body.category_name,
                    vehicle_picture : req.file.filename,
                    price : req.body.price,
                    depreciation : req.body.depreciation,
                    noOfYears : req.body.noOfYears,
                    totalPrice : vehPrice
            });
            console.log(req.file)
            console.log("New data : \n" + data);
            var saveData = vehicles.create(data);
            console.log("Vehicle added successfully");
            res.redirect("/");
    }
    catch(err)
    {
        console.log("Error\n" + err);
    }
});

vehRoute.get("/add",async(req,res)=>{
    try{
        var data = await categories.find({});
        res.render("AddNew",{data:data});
    }   
    catch(err)
    {
        console.log(err);
    }
});

module.exports = vehRoute;