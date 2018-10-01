const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dailyCashOutflow = new Schema({
  vendor_paidout: Number,
    credit_card: Number,
    lotto_lottery: Number,
    bank_deposit: Number,
    atm_deposit: Number,
    money_gram: Number,
    money_order: Number,
    individual: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CashOutflow', dailyCashOutflow)
