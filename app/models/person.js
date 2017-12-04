

module.exports = function(sequelize, DataTypes) {
	var Person = sequelize.define("Person", {
		first_name: {
		type: DataTypes.STRING
		},
		last_name: {
		type: DataTypes.STRING
		},
		street_address: {
		type: DataTypes.STRING
		},
		home_phone: {
		type: DataTypes.BIGINT
		},
		work_phone: {
		type: DataTypes.BIGINT
		},
		mobile_phone: {
		type: DataTypes.BIGINT
		},
		email: {
		type: DataTypes.STRING
		},
		password: {
		type: DataTypes.STRING
		},
		security: {
		type: DataTypes.STRING
		},
		guardian: {
		type: DataTypes.BOOLEAN
		},
		safe_place: {
		type: DataTypes.BOOLEAN
		}
	});

	Person.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
	    Person.hasMany(models.Car, {
	      onDelete: "cascade"
	    });
    
	}
  return Person;
};







// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// var PostPeople = sequelize.define("people", {
//   first_name: {
//     type: Sequelize.STRING
//   },
//   last_name: {
//     type: Sequelize.STRING
//   },
//   street_address: {
//     type: Sequelize.STRING
//   },
//   home_phone: {
//     type: Sequelize.BIGINT
//   },
//   work_phone: {
//     type: Sequelize.BIGINT
//   },
//   mobile_phone: {
//     type: Sequelize.BIGINT
//   },
//   email: {
//     type: Sequelize.STRING
//   },
//   password: {
//     type: Sequelize.STRING
//   },
//   security: {
//     type: Sequelize.STRING
//   },
//   guardian: {
//     type: Sequelize.BOOLEAN
//   },
//   safe_place: {
//     type: Sequelize.BOOLEAN
//   },
//   created_at: {
//     type: Sequelize.DATE
//   }
// }, {
//   timestamps: false
// });

// PostPeople.sync();

// module.exports = PostPeople;



// module.exports = function(sequelize, DataTypes) {
//   var People = sequelize.define('person', {

//   }, {
//     tablename: 'people'
//   });
//   return People;
// };
