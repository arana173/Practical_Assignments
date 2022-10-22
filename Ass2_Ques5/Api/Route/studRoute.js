const {display,add,deleteRec,update,getById,getToken} = require("../Controller/StudController");
const student = require("../Model/studModel");
const studRoute = require("express").Router();

studRoute.route("/").get(display);
studRoute.route("/login").get(getToken);
studRoute.route("/add").post(add);
studRoute.route("/:id").get(getById).delete(deleteRec).put(update);

module.exports = studRoute;
