const ctrl = require( "./ctrl" );


module.exports = app =>{

  app.get( "/web", ctrl.addUserClicks );

}
