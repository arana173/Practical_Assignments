const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    username : {
        type:String
    },
    password : {
        type:String
    }
});

const AdminModel = mongoose.model("Admins",adminSchema);
module.exports = AdminModel;