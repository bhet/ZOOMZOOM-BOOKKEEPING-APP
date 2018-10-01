const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dailyCashInflow = new Schema({
  extra_cash_total: Number,
  register_total: Number,
  total_cash_inflow: Number,
  extra_cash_id: String,
  register_total_id: string
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CashInflow', dailyCashInflow)
