
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

//create the threads table
var Threads = sequelize.define("threads", {
  title: {
    type: Sequelize.STRING
  },
  owner_id: {
    type: Sequelize.Id
  },
  body: {
    type: Sequelize.TEXT
  },
  posted_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
Pets.sync();

//export the thread model
module.exports = Threads;
