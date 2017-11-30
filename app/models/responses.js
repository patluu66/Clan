
module.exports = function(sequelize, DataTypes) {

	var PostResponses = sequelize.define("responses", {
	  threads_id: {
	    type: DataTypes.INTEGER
	  },
	  owner_id: {
	    type: DataTypes.INTEGER
	  },
	  response: {
	    type: DataTypes.STRING
	  }
	});

	PostResponses.associate = function(models) {
	// Associating Author with Posts
	// When an Author is deleted, also delete any associated Posts
		PostResponses.belongsTo(models.PostPeople, {
		  foreignKey: {
		    allowNull: false
		  }
		});

		PostResponses.belongsTo(models.threads, {
		  foreignKey: {
		    allowNull: false
		  }
		});
	};

  return PostResponses;
};










// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");


// var PostResponses = sequelize.define("reply", {
//   threads_id: {
//     type: Sequelize.INTEGER
//   },
//   owner_id: {
//     type: Sequelize.INTEGER
//   },
//   response: {
//     type: Sequelize.STRING
//   },
//   created_at: {
//     type: Sequelize.DATE
//   }
// }, {
//   timestamps: false
// });


// PostResponses.sync();
// module.exports = PostResponses;











// module.exports = function(sequelize, DataTypes) {
// //create the threads table
// var Responses = sequelize.define('response', {

// }, {
//   tablename: 'responses'
// });
//   return Responses;
// };
