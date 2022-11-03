const mongoose = require("mongoose");

const vehSchema = new mongoose.Schema({
    vehicle_brand:{
        type : String
    },
    category_name : {
        type:String
    },
    vehicle_picture : {
        type:String
    },
    price : {
        type:Number
    },
    depreciation:{
        type : Number
    },
    noOfYears : {
        type:Number
    },
    totalPrice : {
        type:Number
    },
});

const vehModel = mongoose.model("Vehicles",vehSchema);

module.exports = vehModel;