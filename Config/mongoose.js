require("dotenv").config();
const mongoose = require("mongoose");
// mongoDB atlas uri
const URI = process.env.MONGOSE_ATLAS_URL;

// connecting to mongoDB atlas
const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to DataBase :: MongoDB");
};

module.exports = connectDB;
