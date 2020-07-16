'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      restaurantId: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      hasFood: Sequelize.BOOLEAN,
      foodPrice: Sequelize.DOUBLE,
      hasCoffee: Sequelize.BOOLEAN,
      coffeePrice: Sequelize.DOUBLE,
      hasDessert: Sequelize.BOOLEAN,
      dessertPrice: Sequelize.DOUBLE,
      address: Sequelize.STRING,
      zipcode: Sequelize.STRING,
      cuisine: Sequelize.STRING,
      restaurantImage: Sequelize.STRING,
      foodAmount: Sequelize.INTEGER,
      coffeeAmount: Sequelize.INTEGER,
      dessertAmount: Sequelize.INTEGER,
      donateTo: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Restuarants');
  }
};
