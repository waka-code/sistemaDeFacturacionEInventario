const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  User: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  }
  ,
  Pass: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);