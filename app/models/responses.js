
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

//create the threads table
var Responses = sequelize.define('response', {

}, {
  tablename: 'responses'
});

// Syncs with DB
Responses.sync();

//export the thread model
module.exports = Responses;
