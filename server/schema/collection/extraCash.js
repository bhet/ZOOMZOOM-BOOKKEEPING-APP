const graphql = require('graphql');
const GraphQLDate = require('graphql-date');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,

 } = graphql;

module.exports = new GraphQLObjectType({
  name: 'ExtraCash',
  fields: ()=>({
    id: {type: GraphQLID},
    yesterday_cash: {type: GraphQLFloat},
    cash_from_bank: {type: GraphQLFloat},
    cash_from_atm: {type: GraphQLFloat},
    orlandi_valuta: {type: GraphQLFloat},
    money_order: {type: GraphQLFloat},
    money_gram: {type: GraphQLFloat},
    lotto_lottery: {type: GraphQLFloat},
    debt_collection: {type: GraphQLFloat},
    individual: {type: GraphQLFloat},
    date: {type: GraphQLDate}
  })
});
