const mongoose = require( "mongoose" );
const findOrCreate = require( 'mongoose-findorcreate' );


// const UserClicks =  new mongoose.Schema({
//      tracking: { type: Boolean, default: true }
//      , clicks: { type: Array }
// })
//
//
// module.exports = mongoose.model( "UserClicks", UserClicks)

const User =  new mongoose.Schema({
      ip_address: { type: String, required: true }
     , clicks: { type: Array }

})

User.plugin( findOrCreate );

module.exports = mongoose.model( "User", User );
