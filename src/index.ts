const express = require( 'express' );
const app = express();
const port = 8080; 
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schemas/index.ts')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});