const graphql = require('graphql');
const GraphQLDate = require('graphql-date');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat
 } = graphql;

module.exports = new GraphQLObjectType({
  name: 'CashOutflow',
  fields: ()=>({
    id: {type: GraphQLID},
    vendor_paidout: {type: GraphQLFloat},
    credit_card: {type: GraphQLFloat},
    lotto_lottery: {type: GraphQLFloat},
    bank_deposit: {type: GraphQLFloat},
    atm_deposit: {type: GraphQLFloat},
    money_order: {type: GraphQLFloat},
    money_gram: {type: GraphQLFloat},
    individual: {type: GraphQLFloat},
    date: {type: GraphQLDate}
  })
});
