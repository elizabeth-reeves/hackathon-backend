'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    hasFood: DataTypes.BOOLEAN,
    foodPrice: DataTypes.DOUBLE,
    hasCoffee: DataTypes.BOOLEAN,
    coffeePrice: DataTypes.DOUBLE,
    hasDessert: DataTypes.BOOLEAN,
    dessertPrice: DataTypes.DOUBLE,
    address: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    cuisine: DataTypes.STRING,
    restaurantImage: DataTypes.STRING,
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
