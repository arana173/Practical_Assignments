const mongoose = require("mongoose");

const dbCon = (url)=>{
    mongoose.connect(url);
    console.log("MongoDb connected");
};

module.exports = dbCon;