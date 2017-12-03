

module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    owner_id: {
      type: DataTypes.INTEGER
    },
    make: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER
    }
  });


  Car.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Car.belongsTo(models.Person, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Car;
};









// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");


// var PostCars = sequelize.define("cars", {
//   owner_id: {
//     type: Sequelize.INTEGER
//   },
//   make: {
//     type: Sequelize.STRING
//   },
//   model: {
//     type: Sequelize.STRING
//   },
//   color: {
//     type: Sequelize.STRING
//   },
//   year: {
//     type: Sequelize.INTEGER
//   },
//   created_at: {
//     type: Sequelize.DATE
//   }
// }, {
//   timestamps: false
// });


// PostCars.sync();
// module.exports = PostCars;