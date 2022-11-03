const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category_name : {
        type:String
    }
});

const categoryModel = mongoose.model("Categories",categorySchema);
module.exports = categoryModel;