const mongoose = require("mongoose");
require("../DbConnection/db");
const StudSchema = new mongoose.Schema({
    Rollno : {
        type : Number
    },
    Name : {
        type : String
    },
    Semester :{
        type : Number
    },
    Department : 
    {
        type : String
    },
    Age:{
        type : Number
    },
    City:{
        type : String
    }
});

const StudModel = mongoose.model("students",StudSchema);

module.exports = StudModel;