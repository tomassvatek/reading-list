const data = require('../data/MOCK_DATA.json');
const graphql = require('graphql');
const { GraphQLSchema, GraphQLString, GraphQLList, GraphQLObjectType, GraphQLInt } = graphql;
const { graphqlHTTP } = require('express-graphql');
const bookType = require('./typeDefs/BookType.ts');

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllBooks: {
            type: new GraphQLList(bookType),
            args: { id: {type: GraphQLInt} },
            resolve(parent, args) {
                return data
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createBook: {
            type: bookType ,
            args: {
                name: { type: GraphQLString }
            }
        }
    },
    resolve(parent, args) {
        console.log(args)
        return args
    }
});

module.exports = new GraphQLSchema({query: rootQuery , mutation: mutation });