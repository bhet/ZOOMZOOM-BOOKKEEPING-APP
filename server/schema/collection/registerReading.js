const graphql = require('graphql');
const GraphQLDate = require('graphql-date');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat
 } = graphql;

 module.exports = new GraphQLObjectType({
   name: 'RegisterReading',
   fields: ()=>({
     id: {type: GraphQLID},
     sale: {type: GraphQLFloat},
     check_cash: {type: GraphQLFloat},
     date: {type: GraphQLDate}
   })
 });
