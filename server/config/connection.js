const mongoose = require("mongoose");

//mongoDBUri = "mongodb://localhost:27017/test-deploy";

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
