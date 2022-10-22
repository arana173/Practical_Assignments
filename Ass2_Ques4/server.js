const express = require("express");
const app = express();
const connectDb = require("./DbConnection/db");
const studRoute = require("./Routes/studRoute");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/",studRoute);

app.set("view engine","hbs");

const start = async()=>{
    try{
        await connectDb("mongodb://localhost:27017/StudentData");
        app.listen(8000,()=>{
            console.log("Hello");
        });
    }
    catch(err)
    {
        console.log(err);
    }
}

start();