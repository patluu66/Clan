
module.exports = function(sequelize, DataTypes) {
  	var Threads = sequelize.define('thread', {
	  	title: {
			type: DataTypes.STRING
		},
		body: {
		    type: DataTypes.STRING
		}
	});

  	Threads.associate = function(models) {
	
		Threads.belongsTo(models.PostPeople, {
		  foreignKey: {
		    allowNull: false
		  }
		});
		
	};

  return Threads;
};










// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// var PostThreads = sequelize.define("threads", {
//   title: {
//     type: Sequelize.STRING
//   },
//   owner_id: {
//     type: Sequelize.INTEGER
//   },
//   body: {
//     type: Sequelize.STRING
//   },
//   created_at: {
//     type: Sequelize.DATE
//   }
// }, {
//   timestamps: false
// });

// PostThreads.sync();

// module.exports = PostThreads;

