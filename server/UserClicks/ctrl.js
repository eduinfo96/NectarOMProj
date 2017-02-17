// const UserClicks = require( "./UserClicks" );
const User  = require( "./UserClicks" );


module.exports = {

      findOrAddUser( req, res, next ){
        // newIp = "2323"

        const newUser = {
          ip_address: req.ip
        }

        User.findOrCreate( { ip_address: req.ip }, newUser, ( err, user ) => {
          if( err ){
            return res.send( err );
          }
          return next()
        })

      }

      , addClick( req, res ){
        // newIp = "2323"

        const newClick = {
              timeRequested: new Date().toLocaleString()
              , pageVisited: req.headers.referer
              , userAgent: req.headers["user-agent"]
        }

        User.findOneAndUpdate( { ip_address: req.ip }, { $push: { clicks: newClick } }, { new: true, upsert: true }, ( err, updatedUser ) => {
          if( err ){
            return res.send( err );
          }
          return res.status( 204 ).send( "No Content" );
        } )

      }

}
