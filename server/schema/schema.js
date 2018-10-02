const graphql = require('graphql');
//import mongoose schema module from models folder
const ExtraCash = require('../models/extraCash');
const RegisterReading = require('../models/registerReading');
const CashOutflow = require('../models/cashOutflow');
const RemainingBalance = require('../models/remainingBalance');
//import graphql type from collection
const ExtraCashType = require('./collection/extraCash');
const RegisterReadingType = require('./collection/registerReading');
const CashOutflowType = require('./collection/cashOutflow');
const RemainingBalanceType = require('./collection/remainingBalance');



const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLFloat

 } = graphql;



const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    extraCash: {
      type: ExtraCashType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return ExtraCash.findById(args.id)
      }
    },

    registerReading: {
      type: RegisterReadingType,
      args:{id: {type: GraphQLID}},
      resolve(parent, args){
        return RegisterReading.findById(args.id)
      }
    },

    cashOutflow: {
      type: CashOutflowType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return CashOutflow.findById(args.id)
      }
    },

    remainingBalance: {
      type: RemainingBalanceType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return RemainingBalance.findById(args.id)
      }
    },

    extracashes:{
      type: new GraphQLList(ExtraCashType),
      resolve(parent, args){
        return ExtraCash.find({})
      }
    },

    registerreadings:{
      type: new GraphQLList(RegisterReadingType),
      resolve(parent, args){
        return RegisterReading.find({})
      }
    },

    cashoutflows:{
      type: new GraphQLList(CashOutflowType),
      resolve(parent, args){
        return CashOutflow.find({})
      }
    },

    remainingbalances:{
      type: new GraphQLList(RemainingBalanceType),
      resolve(parent, args){
        return RemainingBalance.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addExtraCash: {
      type: ExtraCashType,
      args: {
        yesterday_cash: {type: new GraphQLNonNull(GraphQLFloat)},
        cash_from_bank: {type: new GraphQLNonNull(GraphQLFloat)},
        cash_from_atm: {type: new GraphQLNonNull(GraphQLFloat)},
        orlandi_valuta: {type: new GraphQLNonNull(GraphQLFloat)},
        money_order: {type: new GraphQLNonNull(GraphQLFloat)},
        money_gram: {type: new GraphQLNonNull(GraphQLFloat)},
        lotto_lottery: {type: new GraphQLNonNull(GraphQLFloat)},
        debt_collection: {type: new GraphQLNonNull(GraphQLFloat)},
        individual: {type: new GraphQLNonNull(GraphQLFloat)},

      },
      resolve(parent, args){
        let extracash = new ExtraCash({
          yesterday_cash: args.yesterday_cash,
          cash_from_bank: args.cash_from_bank,
          cash_from_atm: args.cash_from_atm,
          orlandi_valuta: args.orlandi_valuta,
          money_order: args.money_order,
          money_gram: args.money_gram,
          lotto_lottery: args.lotto_lottery,
          debt_collection: args.debt_collection,
          individual: args.individual,

        });
        return extracash.save()
      }
    },

    addRegisterReading: {
      type: RegisterReadingType,
      args: {
        sale: {type: new GraphQLNonNull(GraphQLFloat)},
        check_cash: {type: new GraphQLNonNull(GraphQLFloat)}
      },
      resolve(parent, args){
        let registerReading = new RegisterReading({
          sale: args.sale,
          check_cash: args.check_cash
        });
        return registerReading.save();
      }
    },

    addCashOutflow: {
      type: CashOutflowType,
      args: {
        vendor_paidout: {type: new GraphQLNonNull(GraphQLFloat)},
        credit_card: {type: new GraphQLNonNull(GraphQLFloat)},
        lotto_lottery: {type: new GraphQLNonNull(GraphQLFloat)},
        bank_deposit: {type: new GraphQLNonNull(GraphQLFloat)},
        atm_deposit: {type: new GraphQLNonNull(GraphQLFloat)},
        money_order: {type: new GraphQLNonNull(GraphQLFloat)},
        money_gram: {type: new GraphQLNonNull(GraphQLFloat)},
        individual: {type: new GraphQLNonNull(GraphQLFloat)}
      },
      resolve(parent, args){
        let cashOutflow = new CashOutflow({
          vendor_paidout: args.vendor_paidout,
          credit_card: args.credit_card,
          lotto_lottery: args.lotto_lottery,
          bank_deposit: args.bank_deposit,
          atm_deposit: args.atm_deposit,
          money_order: args.money_order,
          money_gram: args.money_gram,
          individual: args.individual
        });
        return cashOutflow.save();
      }
    },

    addRemainingBalance: {
      type: RemainingBalanceType,
      args: {
        checks: {type: new GraphQLNonNull(GraphQLFloat)},
        cash: {type: new GraphQLNonNull(GraphQLFloat)},
        change: {type: new GraphQLNonNull(GraphQLFloat)}
      },
      resolve(parent, args){
        let remainingBalance = new RemainingBalance({
          checks: args.checks,
          cash: args.cash,
          change: args.change
        });
        return remainingBalance.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})