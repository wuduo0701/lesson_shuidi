const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var dataSchema = new Schema({
  name: String,
  age: Number,
  sex:  String,
  address: String
});

const data = module.exports = mongoose.model('data',dataSchema);
