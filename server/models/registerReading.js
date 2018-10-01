const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerReadingSchema = new Schema({
  sale: Number,
  check_cash: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RegisterReading', registerReadingSchema)
