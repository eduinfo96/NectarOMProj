const UserClicks = require( "./UserClicks" );


module.exports = {

      addUserClicks( req, res ){

       const click = {
          timeRequested: new Date().toLocaleString()
          , pageVisited: req.headers.referer
          , userAgent: req.headers["user-agent"]
       }

        UserClicks.findOneAndUpdate( { tracking: true }, { $push: { clicks: click } }, { new: true, upsert: true }, ( err, click ) => {
          if( err ){
            return res.send( err );
          }
          return res.status( 204 ).send( "No Content" );
        })
      }

}
