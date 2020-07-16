'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    numMeals: DataTypes.INTEGER,
    numCoffees: DataTypes.INTEGER,
    numDesserts: DataTypes.INTEGER,
    cost: DataTypes.DOUBLE
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Restaurant, {
      foreignKey: 'restaurantId',
      onDelete: 'CASCADE'
    });
  };
  return Order;
};
