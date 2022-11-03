const express = require("express");
const app = express();
const vehRoute = require("./Route/VehRoute");
const dbCon = require("./DbConnection/dbCon");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static("./uploads"));
app.use("/",vehRoute);

app.set("view engine","hbs");

const start = ()=>{
    try{
            dbCon("mongodb://localhost:27017/vehicleDb");
            var server = app.listen(8000,()=>{
                console.log("Server is listening on port " + server.address().port);
            });
        }
    catch(err)
    {
        console.log("Error : " + err);
    }
};

start();
