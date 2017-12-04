
module.exports = function(sequelize, DataTypes) {

	var Response = sequelize.define("Response", {
	  // threads_id: {
	  //   type: DataTypes.INTEGER
	  // },
	  // owner_id: {
	  //   type: DataTypes.INTEGER
	  // },
	  response: {
	    type: DataTypes.STRING
	  }
	});

	Response.associate = function(models) {
	// Associating Author with Posts
	// When an Author is deleted, also delete any associated Posts
		Response.belongsTo(models.Person, {
		  foreignKey: {
		    allowNull: false
		  }
		});

		Response.belongsTo(models.Thread, {
		  foreignKey: {
		    allowNull: false
		  }
		});
	}
  return Response;
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
