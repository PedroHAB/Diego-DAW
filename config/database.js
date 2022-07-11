const mongoose = require("mongoose");

const uri =
  "mongodb+srv://Pedro:Pedro2014@cluster0.evxwo.mongodb.net/?retryWrites=true&w=majority";
//const uri = "mongodb://localhost:27017/info";

mongoose.connect(uri);

module.exports = mongoose;
