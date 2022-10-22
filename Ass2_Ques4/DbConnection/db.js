const mongoose = require("mongoose");

const connectDb = (url)=>{
    mongoose.connect(url);
    console.log("mongodb connected");
};

module.exports = connectDb;