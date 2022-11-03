const mongoose = require("mongoose");

const Connection = (url)=>{
    try{
        mongoose.connect(url);
        console.log("Mongodb connected successfully");
      }
    catch(err)
    {
        console.log("Can not connect mongoDb\n" + err);
    }
};

module.exports = Connection;