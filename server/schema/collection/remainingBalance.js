const graphql = require('graphql');
const GraphQLDate = require('graphql-date');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLFloat
 } = graphql;

 module.exports = new GraphQLObjectType({
   name: 'RemainingBalance',
   fields: ()=>({
     id: {type: GraphQLID},
     checks: {type: GraphQLFloat},
     cash: {type: GraphQLFloat},
     change: {type: GraphQLFloat},
     date: {type: GraphQLDate}
   })
 });
