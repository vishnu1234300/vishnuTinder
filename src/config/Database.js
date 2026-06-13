const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb://vishnutejaakula53_db_user:UvZnKF95UsQPPIRi@ac-w31tbql-shard-00-00.xyijgd8.mongodb.net:27017,ac-w31tbql-shard-00-01.xyijgd8.mongodb.net:27017,ac-w31tbql-shard-00-02.xyijgd8.mongodb.net:27017/devTinder?ssl=true&authSource=admin&retryWrites=true&w=majority"
  );
};

module.exports = { connectDB };