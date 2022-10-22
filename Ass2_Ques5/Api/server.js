const express = require("express");
const app = express();
const dbCon = require("./DbConnection/db");
const studRoute = require("./Route/studRoute");
const cors = require("cors")

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
 
app.use("/",studRoute);


const start = async()=>{
    try{
       await dbCon("mongodb://localhost:27017/StudentData1");
       var server = app.listen(8000,()=>{
            console.log("Server is llistening on port : " + server.address().port);
       });
    }
    catch(err)
    {
        console.log(err);
    }
};

start();