const mongoose = require("mongoose");

mongoDBUri = "mongodb://localhost:27017/test-deploy";

mongoose.connect(mongoDBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

//process.env.MONGODB_URI
