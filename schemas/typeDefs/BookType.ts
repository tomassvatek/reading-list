const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString} = graphql;

const bookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        content: {type: GraphQLString},
        comment: {type: GraphQLString}
    })
})

module.exports = bookType