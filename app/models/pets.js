module.exports = function(sequelize, DataTypes) {

  var Pets = sequelize.define("pets", {
    owner_id: {
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.STRING
    },
    breed: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE
    }
  });

  Pets.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Pets.belongsTo(models.PostPeople, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Pets;
};




















// Pets.sync();


// module.exports = Pets;



// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");






// module.exports = function(sequelize, DataTypes) {
// //create the threads table
//   var Pets = sequelize.define("petInfo", {
//     name: {
//       type: Sequelize.STRING
//     },
//     image: {
//       type: Sequelize.STRING
//     },
//     body: {
//       type: Sequelize.STRING
//     },
//     created_at: {
//       type: Sequelize.DATE
//     }
//   }, {
//     timestamps: false
//   });
//   return Pets;
// };










// // Dependencies
// // =============================================================

// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// // Creates a "Chirp" model that matches up with DB
// var Chirp = sequelize.define("chirp", {
//   author: {
//     type: Sequelize.STRING
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

// // Syncs with DB
// Chirp.sync();

// // Makes the Chirp Model available for other files (will also create a table)
// module.exports = Chirp;
