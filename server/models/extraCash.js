const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const extracashSchema = new Schema({
  yesterday_cash: Number,
  cash_from_bank: Number,
  cash_from_atm: Number,
  orlandi_valuta: Number,
  money_order: Number,
  money_gram: Number,
  lotto_lottery: Number,
  debt_collection: Number,
  individual: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ExtraCash', extracashSchema)
