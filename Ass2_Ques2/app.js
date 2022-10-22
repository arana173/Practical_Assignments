const express = require("express");
const app = express();
const session = require("express-session");
var FileStore = require("session-file-store")(session);

app.use(session({
    secret : 'session store',
    resave : false,
    saveUninitialized :false,
    store : new FileStore,
    cookie : {maxAge:3600000,secure:false,httpOnly:true}
}));

app.use(express.static('Public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set("view engine","hbs");

let uname;
let password;

const validate = (req,res,next)=>{
    req.session.uname = "testUser123";
    req.session.pwd = "testUser@123";

    uname = req.body.uname;
    pwd = req.body.pwd;

    if(uname && pwd)
    {
        if(req.session.uname!=uname || req.session.pwd!=pwd)
        {
            res.send("Invalid username or password");
        }
        else
        {
            next();
        }
    }
    else
    {
        res.send("Please enter username and password");
    }
}


app.get("/",(req,res)=>{

    let msg;
    console.log(uname);
    if(uname)
    {
        msg = "Welcome " + uname + " to this page";
    }
    else
    {
        msg = "Please Login to view this page!!!";
    }
    res.render("home",{msg:msg});
});

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",validate,(req,res)=>{
    res.redirect("/");
});

var server = app.listen(8000,()=>{
    console.log("Server is listening on " + server.address().port);
});