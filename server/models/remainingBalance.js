const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const remainingBalanceSchema = new Schema({
  checks: Number,
  cash: Number,
  change: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RemainingBalance', remainingBalanceSchema)
