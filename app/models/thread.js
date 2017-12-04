
module.exports = function(sequelize, DataTypes) {
  	var Thread = sequelize.define('Thread', {
	  	title: {
			type: DataTypes.STRING
		},
		body: {
		    type: DataTypes.STRING
		}
	});

  	Thread.associate = function(models) {
  		
		Thread.belongsTo(models.Person, {
		  foreignKey: {
		    allowNull: false
		  }
		});
    
    Thread.hasMany(models.Response, {
      onDelete: "cascade"
    });

	};

  return Thread;
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
