// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


var PostRoomMembers = sequelize.define("room_members", {
  room_id: {
    type: Sequelize.INTEGER
  },
  person_id: {
    type: Sequelize.INTEGER
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});


PostRoomMembers.sync();
module.exports = PostRoomMembers;