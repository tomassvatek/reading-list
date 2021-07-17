const express = require( 'express' );
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( '/', ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get('/articles', (req, res) => {
    res.send([{
        id: 1,
        name: 'How Ethereum acutully works?',
        content: 'loremifdsafdsafdafdsafafdasfsafasfdafdafdas'	
    }])
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );