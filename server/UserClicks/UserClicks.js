const mongoose = require( "mongoose" );


const UserClicks =  new mongoose.Schema({

     tracking: { type: Boolean, default: true }
     , clicks: { type: Array }

})


module.exports = mongoose.model( "UserClicks", UserClicks );
