module.exports = function(sequelize, DataTypes) {
  var Pet2 = sequelize.define("pet2", {
    pet_name: {
      type: DataTypes.STRING,
      //burger should have a name
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Pet2.hasOne(models.Customer);
      }
    }
  });
  return Pet2;
};

