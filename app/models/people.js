// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

//create the threads table
var People = sequelize.define('person', {

}, {
  tablename: 'people'
});

// Syncs with DB
Threads.sync();

//export the thread model
module.exports = Threads;
