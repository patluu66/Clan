// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


var PostRooms = sequelize.define("rooms", {
  creator_id: {
    type: Sequelize.INTEGER
  },
  room_name: {
    type: Sequelize.STRING
  },
  room_key: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});


PostRooms.sync();
module.exports = PostRooms;