const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = graphql
module.exports = new GraphQLObjectType({
  name: 'CreateUser',
  fields: () => ({
      id: {type: GraphQLID},
      fullname: { type: GraphQLNonNull(GraphQLString) },
      username: { type: GraphQLNonNull(GraphQLString) },
      email: { type: GraphQLNonNull(GraphQLString) },
      password: { type: GraphQLNonNull(GraphQLString) },
      token: { type: GraphQLString },
      
      //apiKey: { type: GraphQLNonNull(GraphQLString) }

  })
})
