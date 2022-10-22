const mongoose = require("mongoose");
require("../DbConnection/db");

const studSchema = new mongoose.Schema({
    rno : {
        type : Number
    },
    name : {
        type:String
    },
    semester : {
        type : Number
    },
    department : {
        type : String
    },
    age : {
        type : Number
    }
});

const student = mongoose.model("Students",studSchema);

module.exports = student;   