'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    hasFood: DataTypes.BOOLEAN,
    foodPrice: DataTypes.REAL,
    hasCoffee: DataTypes.BOOLEAN,
    coffeePrice: DataTypes.REAL,
    hasDessert: DataTypes.BOOLEAN,
    dessertPrice: DataTypes.REAL,
    address: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    restaurantImage: DataTypes.STRING,
    foodAmount: DataTypes.INTEGER,
    coffeeAmount: DataTypes.INTEGER,
    dessertAmount: DataTypes.INTEGER,
    donateTo: DataTypes.STRING,
    restaurantId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.Order, {
      foreignKey: 'restaurantId',
    });
  };
  return Restaurant;
};
