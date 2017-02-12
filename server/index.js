const express = require( "express" );
const { json } = require( "body-parser" );
const app = express();
const cors = require( "cors" );
const mongoose = require( "mongoose" );
const port = 4004;
const mongoUri = "mongodb://localhost:27017/HighLyfe"


app.use( express.static( `${__dirname}/..`) );
app.use( json() );
app.use( cors() );




const routes = require( "./UserClicks/routes.js" );
routes( app );



mongoose.connect( mongoUri );
mongoose.connection.once( 'open', () => console.log( `Connected to MongoDB at ${ mongoUri }`) );

app.listen( port, () => console.log( `Listening on ${ port }.`) )
