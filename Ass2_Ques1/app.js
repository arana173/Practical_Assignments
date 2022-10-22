const express = require("express");
const {check,validationResult} = require("express-validator");
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/singleFile",(req,res)=>{
    res.render("SingleFile");
});

app.get("/multiFiles",(req,res)=>{
    res.render("MultiFiles");
});

let checkErr;
let errMsg;

app.post("/singleFile",[check('email','Email is invalid').isEmail(),
check('contact','Contact number is invalid').isLength({min:10,max:10}),
check('name','Name is required').isEmpty()],(req,res)=>{

    const errors = validationResult(req);

    if(errors.isEmpty())
    {
        var data = {
            name : req.body.name,
            email : req.body.email,
            contact : req.body.contact,
            city : req.body.city,
            file : req.body.cv 
        };
        res.render("singleFilePost",{data:data});
    }
    else
    {
        console.log(errors);
    }
});

app.post("/multiFiles",(req,res)=>{
    
    var data = {
        name : req.body.name,
        email : req.body.email,
        contact : req.body.contact,
        city : req.body.city,
        uname : req.body.uname,
        pwd:req.body.pwd,
        picture : req.body.pics
    };
    console.log(data);
    res.render("MultiFilesPost",{data:data});
});

var server = app.listen(8000,()=>{
    console.log("Server is listening on port : " + server.address().port);
});


