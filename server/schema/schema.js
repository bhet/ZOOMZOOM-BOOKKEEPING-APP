const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const moment = require('moment');
const JWT_SECRET = require('../secretKey');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

//import mongoose schema module from models folder
const ExtraCash = require('../models/extraCash');
const RegisterReading = require('../models/registerReading');
const CashOutflow = require('../models/cashOutflow');
const RemainingBalance = require('../models/remainingBalance');
const User = require('../models/createuser');
//import graphql type from collection
const ExtraCashType = require('./collection/extraCash');
const RegisterReadingType = require('./collection/registerReading');
const CashOutflowType = require('./collection/cashOutflow');
const RemainingBalanceType = require('./collection/remainingBalance');
const UserType = require('./collection/createUser');



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
    extraCash:{
      type: ExtraCashType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return ExtraCash.findById(args.id)
      }
    },

    lastRecordOfExtraCash:{
      type: new GraphQLList(ExtraCashType),
      async resolve(parent, args){
        let allCollection = await ExtraCash.find({})
        let results = allCollection.reduce((latest, item)=>{
          if(moment(latest.date) > moment(item.date)){
            return latest;
          }else{
            return item;
          }
        })
        return [results];
      }
    },

    lastRecordOfRegister:{
      type: new GraphQLList(RegisterReadingType),
      async resolve(parent, args){
        let allCollection = await RegisterReading.find({})
        let results = allCollection.reduce((latest, item)=>{
          if(moment(latest.date) > moment(item.date)){
            return latest;
          }else{
            return item;
          }
        })
        return [results];
      }
    },

    lastRecordOfCashOutflow:{
      type: new GraphQLList(CashOutflowType),
      async resolve(parent, args){
        let allCollection = await CashOutflow.find({})
        let results = allCollection.reduce((latest, item)=>{
          if(moment(latest.date) > moment(item.date)){
            return latest;
          }else{
            return item;
          }
        })
        return [results];
      }
    },

    lastRecordOfRemainingBalance:{
      type: new GraphQLList(RemainingBalanceType),
      async resolve(parent, args){
        let allCollection = await RemainingBalance.find({})
        let results = allCollection.reduce((latest, item)=>{
          if(moment(latest.date) > moment(item.date)){
            return latest;
          }else{
            return item;
          }
        })
        return [results];
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
        return ExtraCash.find({ })
      }
    },

  extracashByorder:{
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
    },
    users:{
      type: new GraphQLList(UserType),
      resolve(parent, args){
        return User.find({})
      }
    },
    getUser:{
      type: UserType,
      args:{
        id: {type: GraphQLID}
      },
      resolve(parent, args){
        return User.findById(args.id)
      }
    }

  }
});

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
        collect: {type: new GraphQLNonNull(GraphQLFloat)},
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
          collect: args.collect,
          individual: args.individual
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
    },

    updateRemainingBalance:{
      type: RemainingBalanceType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        checks: {type: new GraphQLNonNull(GraphQLFloat)},
        cash: {type: new GraphQLNonNull(GraphQLFloat)},
        change: {type: new GraphQLNonNull(GraphQLFloat)}
      },
      resolve(parent, args) {
        let { id, ...other } = args;
        return RemainingBalance.findByIdAndUpdate(args.id, other)
      }
    },

    updateCashOutFlow:{
      type: CashOutflowType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
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
        let { id, ...other } = args;
        return CashOutflow.findByIdAndUpdate(args.id, other)
        }
    },

    updateRegisterReading:{
      type: RegisterReadingType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        sale: {type: new GraphQLNonNull(GraphQLFloat)},
        check_cash: {type: new GraphQLNonNull(GraphQLFloat)}
      },
      resolve(parent, args){
        let {id, ...other} = args;
        return RegisterReading.findByIdAndUpdate(args.id, other)
      }
    },

    updateExtraCash:{
      type: ExtraCashType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        yesterday_cash: {type: new GraphQLNonNull(GraphQLFloat)},
        cash_from_bank: {type: new GraphQLNonNull(GraphQLFloat)},
        cash_from_atm: {type: new GraphQLNonNull(GraphQLFloat)},
        orlandi_valuta: {type: new GraphQLNonNull(GraphQLFloat)},
        money_order: {type: new GraphQLNonNull(GraphQLFloat)},
        money_gram: {type: new GraphQLNonNull(GraphQLFloat)},
        lotto_lottery: {type: new GraphQLNonNull(GraphQLFloat)},
        collect: {type: new GraphQLNonNull(GraphQLFloat)},
        individual: {type: new GraphQLNonNull(GraphQLFloat)},
      },
      resolve(parent, args){
        let {id, ...other} = args;
        return ExtraCash.findByIdAndUpdate(args.id, other)
      }
    },
    createUsers:{
      type: UserType,
      args:{
        fullname: {type: new GraphQLNonNull(GraphQLString)},
        username: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
      },
      async resolve(parent, args){
        const user = await User.create({
          fullname: args.fullname,
          username:args.username,
          email: args.email,
          password:  await bcrypt.hash(args.password, 10)
        });
        let addedUser = await user.save();

        addedUser.token = await jsonwebtoken.sign(
            { id: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: '1y' }
          )
        return addedUser;
      }
    },
    login:{
      type: UserType,
      args:{
        username: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
      },
      async resolve(parent, args){
        const username = args.username;
        const loginUser = await User.findOne({username: username})
          if(!loginUser){
            throw new Error('No user with that username')
          }

          const password = args.password;
          const valid = await bcrypt.compare(password, loginUser.password);
           // const valid = password === loginUser.password;
          if(!valid){
            throw new Error('Invalid password')
          }
          loginUser.token = await jsonwebtoken.sign(
            {id: loginUser.id, username: loginUser.username},
            JWT_SECRET,
            {expiresIn: '1d'}
          )
          return loginUser
      }
    },
    deleteUser:{
      type: UserType,
      args:{
        id: {type: new GraphQLNonNull(GraphQLID)},
        username: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve(parent, args){
        console.log("args...", args);
        let { id, ...others} = args;
        console.log("delete")
        return User.findByIdAndRemove(args.id)
      }
    },
    userDelete:{
      type: UserType,
      args:{
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, { id }){
        return User.delete(id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
